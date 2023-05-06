import { Box, Flex, Image } from "@chakra-ui/react";
import Header from "../Header";
import HomeComponent3 from "./HomeSection3";

const AuthHome = () => {
  return (
    <Flex pl={{ base: "2rem", md: "5rem" }} bg="gray.50">
      <Box w={{ base: "100%", md: "60%" }}>
        <Header />
        <HomeComponent3 />
      </Box>
      <Image
        display={{ base: "none", md: "block" }}
        w="40%"
        src="https://images.unsplash.com/photo-1534824394572-a24ff25bbb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGluZGlhbiUyMG1lYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
    </Flex>
  );
};

export default AuthHome;
