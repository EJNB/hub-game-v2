import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";

interface Props {
  queryGame: GameQuery;
}
const GameHeading = ({ queryGame }: Props) => {
  const heading = `${queryGame.platform?.name || ""} ${
    queryGame.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
