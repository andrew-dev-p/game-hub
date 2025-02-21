import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlatformSelector } from "./components/ui/PlatformSelector";
import { Platform } from "./hooks/useGames";

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={`"nav nav" "aside main"`}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "block" }}
        area="aside"
        paddingX={5}
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelecteGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid
          selectedPlatform={gameQuery.platform}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
