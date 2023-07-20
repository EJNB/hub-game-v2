import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import Logo from "../assets/logo.webp";
import SearchInput from "./SearchInput.tsx";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
