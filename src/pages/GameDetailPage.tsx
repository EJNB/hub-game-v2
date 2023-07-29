import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import { Box, Heading } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGame(id!);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Box padding={5}>
      <Heading> {data.name}</Heading>
      <p>{data.description_raw}</p>
    </Box>
  );

  // return <p>{data?.data.description}</p>;
};

export default GameDetailPage;
