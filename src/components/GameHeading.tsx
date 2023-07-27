import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";
import usePlatform from "../hooks/usePlatform.ts";
import useGenre from "../hooks/useGenre.ts";

interface Props {
  queryGame: GameQuery;
}
const GameHeading = ({ queryGame }: Props) => {
  const genre = useGenre(queryGame.genreId);
  const platform = usePlatform(queryGame.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
