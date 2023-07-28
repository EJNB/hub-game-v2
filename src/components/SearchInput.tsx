import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "../store.ts";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((state) => state.setSearchText);

  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) setSearchText(inputRef.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Seach Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
