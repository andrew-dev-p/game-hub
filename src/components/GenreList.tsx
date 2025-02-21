import useGenres from "@/hooks/useGenres";
import { getCroppedImageUrl } from "@/services/image-url";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

export const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {genres.map((genre) => (
        <List.Item paddingY="5px" fontSize="lg" listStyle="none">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
