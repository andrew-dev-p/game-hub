import useGenres from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/services/image-url";
import useGameQueryStore from "@/store";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

export const GenreList = () => {
  const { gameQuery, setGenreId } = useGameQueryStore();

  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {genres?.results.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" fontSize="lg" listStyle="none">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={gameQuery.genreId === genre.id ? "bold" : "normal"}
              onClick={() => setGenreId(genre.id)}
              variant="ghost"
              padding="0px"
              _hover={{
                textDecoration: "underline",
                background: "none",
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
