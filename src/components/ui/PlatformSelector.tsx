import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./Menu";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";

export const PlatformSelector = () => {
  const { gameQuery, setPlatformId } = useGameQueryStore();

  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform
            ? `Platform: ${selectedPlatform.name}`
            : "Select a platform"}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            value={platform.slug}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};
