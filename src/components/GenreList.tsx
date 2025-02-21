import useGenres, { Genre } from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/services/image-url";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface GenreListProps {
  onSelecteGenre: (genre: Genre) => void;
}

export const GenreList: React.FC<GenreListProps> = ({ onSelecteGenre }) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {genres.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" fontSize="lg" listStyle="none">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelecteGenre(genre)}
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
