import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./ui/GameCard";
import { GameCardSkeleton } from "./ui/GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";
import React from "react";

interface GameGridProps {
  selectedGenre: Genre | null;
}

export const GameGrid: React.FC<GameGridProps> = ({ selectedGenre }) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);

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
        gap={3}
      >
        {games.map((game) => (
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
    </>
  );
};
