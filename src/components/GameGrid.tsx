import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./ui/GameCard";
import { GameCardSkeleton } from "./ui/GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import React from "react";
import { GameQuery } from "@/App";

interface GameGridProps {
  gameQuery: GameQuery;
}

export const GameGrid: React.FC<GameGridProps> = ({ gameQuery }) => {
  const { data: games, error, isLoading } = useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      padding="10px"
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      gap={5}
    >
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
      {isLoading &&
        Array.from({ length: 6 }).map((_, index) => (
          <GameCardContainer key={index}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};
