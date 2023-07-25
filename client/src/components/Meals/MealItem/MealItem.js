import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const IMAGE =
  "https://images.unsplash.com/photo-1619683815335-2b5b130a1baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image,
    });
  };

  const foodDescripition = props.descripition.slice(0, 100) + "  ...";

  return (
    <Flex
      my={12}
      width={{ base: "full", md: "33%" }}
      justifyContent={"center"}
      display={{ base: "flex", md: "inline-grid" }}
    >
      <Box
        role={"group"}
        p={{ base: 2, md: 4 }}
        pt="0"
        mb="2rem"
        maxW={"350px"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        h="25rem"
      >
        <Center>
          <Image
            rounded={"lg"}
            height={{ base: 150, md: 170 }}
            width={{ base: 200, md: 220 }}
            objectFit={"cover"}
            src={props.image}
            mt={{ base: "-10", md: "-5" }}
            boxShadow={"dark-lg"}
          />
        </Center>
        <Stack align={"center"}>
          <Heading
            fontSize={"2xl"}
            textAlign={"center"}
            fontFamily={"Open Sans"}
            fontWeight={500}
            pt={{ base: "-1", md: "3" }}
          >
            {props.name}
          </Heading>
          <Text color={"gray.500"} fontSize={"sm"}>
            {foodDescripition}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"} color="primary.400">
              ₹{props.price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ₹{props.price + 50}
            </Text>
          </Stack>
          <Stack _hover={{ cursor: "pointer" }}>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};
export default MealItem;
