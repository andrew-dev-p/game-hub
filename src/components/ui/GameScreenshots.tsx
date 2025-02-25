import useScreenshots from "@/hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface GameScreenshotsProps {
  gameId: number;
}

export const GameScreenshots: React.FC<GameScreenshotsProps> = ({ gameId }) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error || !screenshots) return null;

  return (
    <SimpleGrid
      gap={2}
      columns={{
        base: 1,
        md: 2,
      }}
    >
      {screenshots.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};
