import { GameGrid } from "@/components/GameGrid";
import { GenreList } from "@/components/GenreList";
import { GameHeading } from "@/components/ui/GameHeading";
import { PlatformSelector } from "@/components/ui/PlatformSelector";
import { SortSelector } from "@/components/ui/SortSelector";
import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";

export const Homepage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        display={{ base: "none", lg: "block" }}
        area="aside"
        paddingX={5}
      >
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
