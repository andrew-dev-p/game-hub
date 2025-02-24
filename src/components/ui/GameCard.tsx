import { Game } from "../../entities/Game";
import { Image, Card, Heading, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "../PlatformIconList";
import { CriticScore } from "./CriticScore";
import { getCroppedImageUrl } from "@/services/image-url";
import { Emoji } from "./Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card.Root height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading _hover={{ textDecoration: "underline" }} fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
};
