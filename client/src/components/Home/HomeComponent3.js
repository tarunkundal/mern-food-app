import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

const titles = [
  "Unexpected guests?",
  "Game night?",
  "Movie marathon?",
  "Cooking gone wrong?",
  "Late night at office?",
  "Hungry?",
];

const HomeComponent3 = () => {
  const [title, setTitle] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * titles.length);
    setTitle(titles[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <Flex px={{ base: "1rem", md: "5rem" }} h="50vh">
      <Flex flexDirection={"column"} rowGap={"2rem"} justifyContent={"center"}>
        <Heading>{title}</Heading>
        <Text fontSize={"20px"} color={"gray.600"} fontWeight={"medium"}>
          Order food from favourite restaurants near you.
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeComponent3;
