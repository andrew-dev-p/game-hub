import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export const GameHeading: React.FC<GameHeadingProps> = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
