import { GameAttributes } from "@/components/GameAttributes";
import { CriticScore } from "@/components/ui/CriticScore";
import { DefinitionItem } from "@/components/ui/DefinitionItem";
import useGame from "@/hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return null;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
      <GameAttributes game={game} />
    </>
  );
};
