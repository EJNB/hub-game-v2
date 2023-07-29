import useGameTrailer from "../hooks/useGameTrailer.ts";

interface Props {
  gameId: string;
}

const GameTrailer = ({ gameId }: Props) => {
  const { isLoading, error, data: game } = useGameTrailer(gameId);
  const firstTrailer = game?.results[0];

  // if (isLoading || !firstTrailer) return null;
  if (error) throw error;

  return !isLoading && firstTrailer ? (
    <video
      src={firstTrailer.data["max"]}
      poster={firstTrailer.preview}
      controls
    ></video>
  ) : null;
};

export default GameTrailer;
