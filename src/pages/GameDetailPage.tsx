import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTriller.tsx";
import GameScreenShots from "../components/GameScreenShots.tsx";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGame(id!);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <SimpleGrid padding={5} columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading> {data.name}</Heading>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <GameAttributes game={data} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={data.id.toString()} />
        <GameScreenShots gameId={data.id.toString()} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
