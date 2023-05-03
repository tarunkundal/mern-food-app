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
        textColor={"gray.600"}
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
            placeholder="Search Food "
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

export default HeaderSearch;
