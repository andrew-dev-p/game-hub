import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./ui/Switch";
import { useColorMode } from "./ui/ColorMode";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch checked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};
