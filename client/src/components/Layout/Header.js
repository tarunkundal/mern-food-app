import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import HeaderSearch from "./HeaderSearch";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "../../routes/Routes";

const Header = (props) => {
  return (
    <>
      <Stack
        direction={"row"}
        top={0}
        left={0}
        bg={"#a51d02"}
        color={"white"}
        height={"5rem"}
        width={"100%"}
        zIndex={10}
        position={"fixed"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"6%"}
        boxShadow={"md"}
        fontFamily={"Open Sans"}
      >
        <Heading size={{ base: "md", md: "xl" }}>Mealster</Heading>

        <HeaderSearch />

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box
            cursor={"pointer"}
            color={"teritory"}
            _hover={{ color: "secondary" }}
            mr={"1rem"}
          >
            <Link to={Routes.SIGNIN}>
              <BiLogIn fontSize={"2rem"} />
            </Link>
          </Box>

          <HeaderCartButton onClickCartButton={props.onShowCart} />
        </Flex>
      </Stack>
      <Box w={"100%"} zIndex={0} h={"25rem"} overflow={"hidden"}>
        <Image
          src={mealsImage}
          alt="All delicious meals at one table!"
          width={"110%"}
          height={"100%"}
          objectFit={"cover"}
          transform={"rotateZ(-5deg) translateY(-4rem) translateX(-1rem)"}
        />
      </Box>
    </>
  );
};

export default Header;
