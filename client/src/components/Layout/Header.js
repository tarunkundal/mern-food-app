import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import HeaderSearch from "./HeaderSearch";

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

        <HeaderCartButton onClickCartButton={props.onShowCart} />
      </Stack>
      <Box w={"100%"} zIndex={0} h={"25rem"} overflow={"hidden"}>
        <Image
          src={mealsImage}
          alt="All delicious meals at one table!"
          width={"110%"}
          height={"100%"}
          objectFit={"cover"}
          transform={"rotateZ(-5deg) translateY(-4rem) translateX(-1rem)"}
          style={{
            WebkitBoxReflect:
              "below 0px linear-gradient(transparent, rgba(0,0,0,0.0),rgba(0,0,0,0.3))",
          }}
        />
      </Box>
    </>
  );
};

export default Header;
