import { Flex, Heading, Text } from "@chakra-ui/react";
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
    <Flex rowGap={"3rem"} py="2rem" pb="5rem" flexDirection={"column"}>
      <Flex flexDirection={"column"} rowGap={"1rem"} justifyContent={"center"}>
        <Heading>{title}</Heading>
        <Text fontSize={"20px"} color={"gray.600"} fontWeight={"medium"}>
          Order food from favourite restaurants near you.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} rowGap={"1rem"}>
        <Text color={"gray.500"}>POPULAR CITIES IN INDIA</Text>
        <Text color={"gray.600"} fontWeight={500}>
          Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai
          Pune & more.
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeComponent3;
