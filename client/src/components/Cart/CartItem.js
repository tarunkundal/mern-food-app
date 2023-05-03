import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <Flex
      justifyContent={"space-between"}
      pb="0.75rem"
      borderBottom={"2px"}
      borderBottomColor={"#8a2b06"}
      m={"1.5rem 0.5rem"}
    >
      <Stack w={{ base: "60%", md: "40%" }}>
        <Text fontSize={"1rem"}>{props.name}</Text>
        <Flex
          fontWeight={"bold"}
          fontSize={"md"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text color="#8a2b06">{price}</Text>

          <Box border="1px" color="#363636" px={".25rem "} borderRadius={"md"}>
            X {props.amount}
          </Box>
        </Flex>
      </Stack>

      <Stack direction={{ base: "row", md: "column" }} alignItems={"center"}>
        <Button
          border={"1px"}
          borderColor={"#8a2b06"}
          color={"#8a2b06"}
          size={"sm"}
          _hover={{ bg: "#8a2b06", color: "white" }}
          onClick={props.onRemove}
        >
          <FaMinus />
        </Button>
        <Button
          border={"1px"}
          borderColor={"#8a2b06"}
          color={"#8a2b06"}
          size={"sm"}
          _hover={{ bg: "#8a2b06", color: "white" }}
          onClick={props.onAdd}
        >
          <FaPlus />
        </Button>
      </Stack>
    </Flex>
  );
};

export default CartItem;
