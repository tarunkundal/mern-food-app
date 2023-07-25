import { Box, Flex, Image } from "@chakra-ui/react";
import Header1 from "./HeaderCom1";
import Header2 from "./HeaderCom2";

const Header = () => {
  const reflectedBoxStyle = {
    WebkitBoxReflect:
      "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0),rgba(0,0,0,0.3))",
    height: "220px",
  };

  return (
    <Flex pl={{ base: "2rem", md: "5rem" }} bg="gray.50">
      <Box w={{ base: "100%", md: "60%" }}>
        <Header1 />
        <Header2 />
      </Box>
      <Image
        display={{ base: "none", md: "block" }}
        w="40%"
        src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35126.jpg?size=626&ext=jpg&ga=GA1.1.823988085.1685946705&semt=ais"
        style={reflectedBoxStyle}
      />
    </Flex>
  );
};

export default Header;