import useTrailers from "@/hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface GameTrailerProps {
  gameId: number;
}

export const GameTrailer: React.FC<GameTrailerProps> = ({ gameId }) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);

  const first = trailers?.results[0];

  if (isLoading) return <Spinner />;

  if (error || !first) return null;

  return <video src={first.data[480]} poster={first.preview} controls />;
};
