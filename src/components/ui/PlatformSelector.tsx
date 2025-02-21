import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./menu";
import usePlatforms from "@/hooks/usePlatforms";

export const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Platform
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms.map((platform) => (
          <MenuItem value={platform.slug} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};
