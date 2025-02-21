import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "../components/ui/ColorModeSwitch";
import { SearchInput } from "./ui/SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
