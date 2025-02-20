import useGames from "@/hooks/useGames";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && error}
      {games.map((game) => game.name)}
    </div>
  );
};
