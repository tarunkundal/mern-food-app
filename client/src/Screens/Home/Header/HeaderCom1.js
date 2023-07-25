import { Button, Flex, Image } from "@chakra-ui/react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "../../../routes/Routes";

const HeaderCom1 = () => {
  return (
    <Flex
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb="3rem"
    >
      <Image src={Logo} w={{ base: "10rem", md: "20rem" }} mb="-3rem" />
      <Flex
        mt="2rem"
        w={{ base: "40%", md: "30%" }}
        justifyContent={"space-around"}
      >
        <Button
          bg={"primary.100"}
          size={{ base: "sm", md: "md" }}
          color={"secondary"}
          transition={"ease-in-out .4s"}
          _hover={{ bg: "primary.400", transform: "scale(.94)" }}
        >
          <Link to={Routes.SIGNIN}>Sign In</Link>
        </Button>

        <Button
          bg={"primary.100"}
          color="secondary"
          size={{ base: "sm", md: "md" }}
          transition={"ease-in-out .4s"}
          _hover={{ bg: "primary.400", transform: "scale(.94)" }}
        >
          <Link to={Routes.SIGNUP}>Sign Up</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderCom1;
