import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGender";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export const GameHeading: React.FC<GameHeadingProps> = ({ gameQuery }) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
