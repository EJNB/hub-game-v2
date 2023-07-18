import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
