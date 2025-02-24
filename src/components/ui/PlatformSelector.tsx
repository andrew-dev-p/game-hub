import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./Menu";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";

interface PlatformSelectorProps {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const { data: platforms, error } = usePlatforms();

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
            onClick={() => onSelectPlatform(platform)}
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
