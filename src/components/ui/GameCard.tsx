import { Game } from "@/hooks/useGames";
import { Image, Card, Heading, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "../PlatformIconList";
import { CriticScore } from "./CriticScore";
import { getCroppedImageUrl } from "@/services/image-url";

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="300px">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};
