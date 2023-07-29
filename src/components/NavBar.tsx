import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import Logo from "../assets/logo.webp";
import SearchInput from "./SearchInput.tsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={Logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
