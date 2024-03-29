import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const HeaderSearch = () => {
  return (
    <>
      <FormControl
        w={{ base: "150px", md: "md" }}
        bg="gray.100"
        rounded={"md"}
        textColor={"primary.400"}
        fontWeight={"900"}
        fontFamily={"eyada, cursive"}
      >
        <InputGroup>
          <InputRightElement
            cursor={"pointer"}
            color={"brown"}
            children={<FaSearch />}
          />
          <Input
            outlineColor={"brown"}
            type="text"
            name="name"
            placeholder="Search Your Favourite Food"
            fontWeight={"semibold"}
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

export default HeaderSearch;
