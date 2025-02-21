import useGenres from "@/hooks/useGenres";

export const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return <>{genres.map((g) => g.name)}</>;
};
