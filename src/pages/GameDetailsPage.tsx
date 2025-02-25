import { GameAttributes } from "@/components/GameAttributes";
import { GameScreenshots } from "@/components/ui/GameScreenshots";
import { GameTrailer } from "@/components/ui/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <Text>{game.description_raw}</Text>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};
