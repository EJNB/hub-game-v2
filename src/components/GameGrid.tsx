import useGames from "../hooks/useGames.tsx";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
