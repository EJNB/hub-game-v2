import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import { Box, Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGame(id!);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Box padding={5}>
      <Heading> {data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes game={data} />
    </Box>
  );

  // return <p>{data?.data.description}</p>;
};

export default GameDetailPage;
