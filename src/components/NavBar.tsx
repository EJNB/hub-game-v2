import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import Logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={Logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
