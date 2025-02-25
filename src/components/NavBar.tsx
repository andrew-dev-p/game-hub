import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "../components/ui/ColorModeSwitch";
import { SearchInput } from "./ui/SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
