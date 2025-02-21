import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./Switch";
import { useColorMode } from "./ColorMode";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack flexShrink={0}>
      <Switch checked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};
