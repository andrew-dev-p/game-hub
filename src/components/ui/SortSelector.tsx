import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./menu";

export const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          123
        </Button>
      </MenuTrigger>
      <MenuContent>
        {/* {platforms.map((platform) => ( */}
        <MenuItem
          // onClick={() => onSelectPlatform(platform)}
          // value={platform.slug}
          // key={platform.id}
          value="123"
        >
          {/* {platform.name} */}
          456
        </MenuItem>
        {/* ))} */}
      </MenuContent>
    </MenuRoot>
  );
};
