import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";
import getCroppedImageUrl from "../services/image-url.ts";
import useGameQueryStore from "../store.ts";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();

  const { genreId, onSelectedGenre } = useGameQueryStore((state) => ({
    genreId: state.gameQuery.genreId,
    onSelectedGenre: state.setGenreId,
  }));

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre.id)}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
