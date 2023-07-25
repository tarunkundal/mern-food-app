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
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      pb={{ base: "2rem", md: "0" }}
    >
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
          <Button rounded="full" label={"Twitter"}>
            <Link href="https://www.twitter.com">
              <FaTwitter color="skyblue" />
            </Link>
          </Button>

          <Button rounded="full" label={"YouTube"}>
            <Link href={"https://www.youtube.com"}>
              <FaYoutube color="red" />
            </Link>
          </Button>

          <Button rounded="full" label={"Instagram"}>
            <Link href={"https://www.instagram.com"}>
              <FaInstagram color="orange" />
            </Link>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
