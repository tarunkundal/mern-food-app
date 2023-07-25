import { Box, Heading, Text } from "@chakra-ui/react";

const MealsSummary = () => {
  return (
    <Box
      textAlign={"center"}
      maxW={"45rem"}
      w={"90%"}
      m={"auto"}
      mt={"-10rem"}
      position={"relative"}
      bgColor={"primary.400"}
      color={"white"}
      borderRadius={"lg"}
      p={"1rem"}
      boxShadow={"2xl"}
      letterSpacing={"wider"}
      transition={"ease-out .6s all"}
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      <Heading as={"h2"} fontSize={"2rem"} mt={0}>
        Delicious Food, Deliverd To You
      </Heading>
      <Text my={4} fontSize={"18px"}>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </Text>
      <Text fontSize={"18px"}>
        All our meals are cooked with high-quality indgerdients, just-in-time
        and of course by experienced chefs!
      </Text>
    </Box>
  );
};

export default MealsSummary;
