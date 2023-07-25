import {
  Box,
  Button,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <Box bg="secondary" color={"primary.400"} pb={{ base: "2rem", md: "0" }}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image src={Logo} alt="logo" w="15rem" />
        <Text fontWeight={600}>© 2023 Mealster. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Link href="https://www.twitter.com">
            <Button
              rounded="full"
              transition="ease-in-out .7s all"
              _hover={{ transform: "scale(1.3)" }}
            >
              <FaTwitter color="skyblue" />
            </Button>
          </Link>

          <Link href={"https://www.youtube.com"}>
            <Button
              rounded="full"
              transition="ease-in-out .7s all"
              _hover={{ transform: "scale(1.3)" }}
            >
              <FaYoutube color="red" />
            </Button>
          </Link>

          <Link href={"https://www.instagram.com"}>
            <Button
              rounded="full"
              transition="ease-in-out .7s all"
              _hover={{ transform: "scale(1.3)" }}
            >
              <FaInstagram color="orange" />
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
