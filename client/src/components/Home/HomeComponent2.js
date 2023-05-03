import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeComponent2 = () => {
  return (
    <>
      <Stack
        direction={"row"}
        px={{ base: ".5rem", md: "2rem" }}
        alignItems={"center"}
      >
        <Flex
          direction={"column"}
          justifyContent={"space-around"}
          w="40%"
          fontFamily={"open sans"}
          pl={{ base: "1rem", md: "3rem" }}
        >
          <Heading fontSize={{ base: "1.3rem", md: "2.5rem" }}>
            Restaurants in your pocket
          </Heading>
          <Text my="1rem" fontSize={{ base: "14px", md: "1.3rem" }}>
            Order from your favorite restaurants & track on the go, with the
            all-new Mealster app.
          </Text>
          <Flex
            mt={{ base: "1rem", md: "2rem" }}
            fontSize={{ base: "sm", md: "lg" }}
            flexDirection={{ base: "column", md: "row" }}
            rowGap={"1rem"}
            columnGap={"1rem"}
          >
            <Button>
              <Link>Order Meals</Link>
            </Button>
            <Button>App Store</Button>
          </Flex>
        </Flex>
        <Flex w="60%" height={{ base: "50vh", md: "80vh" }}>
          <Image
            w="50%"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
          />
          <Image
            w="50%"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
          />
        </Flex>
      </Stack>
    </>
  );
};

export default HomeComponent2;
