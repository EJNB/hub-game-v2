import useScreenShots from "../hooks/useScreenShots.ts";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: string;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { isLoading, error, data } = useScreenShots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((file) => <Image key={file.id} src={file.image} />)}
    </SimpleGrid>
  );
};

export default GameScreenShots;
