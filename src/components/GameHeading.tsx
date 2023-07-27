import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";
import useGenres from "../hooks/useGenres.ts";
import usePlatforms from "../hooks/usePlatforms.ts";

interface Props {
  queryGame: GameQuery;
}
const GameHeading = ({ queryGame }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((g) => g.id === queryGame.genreId);
  const platform = platforms?.results.find((g) => g.id === queryGame.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
