import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./ui/GameCard";
import { GameCardSkeleton } from "./ui/GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        gap={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
      </SimpleGrid>
    </>
  );
};
