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
      width={{ base: "full", md: "29%" }}
      justifyContent={"center"}
      m={8}
      display={{ base: "flex", md: "inline-grid" }}
    >
      <Box
        role={"group"}
        p={{ base: 2, md: 4 }}
        // minW={"320px"}
        boxShadow={"md"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        h="25rem"
        m={2}
        _hover={{ boxShadow: "2xl" }}
      >
        <Center>
          <Image
            rounded={"lg"}
            height={{ base: 200, md: 190 }}
            w={"90%"}
            objectFit={"cover"}
            src={props.image}
            mt={{ base: "-10", md: "-5" }}
            boxShadow={"xl"}
            transition={"ease-in-out .5s all"}
            _hover={{
              transform: "scale(1.04) rotate(1deg)",
              cursor: "pointer",
              boxShadow: "2xl",
            }}
          />
        </Center>
        <Stack align={"center"}>
          <Flex w={"90%"} justifyContent={"space-between"}>
            <Stack>
              <Heading
                fontSize={"2xl"}
                pt={{ base: "-1", md: "3" }}
                color={"teritory"}
              >
                {props.name}
              </Heading>
              <Text>{foodDescripition}</Text>
            </Stack>

            <Flex direction={"column"}>
              <Text>Rating</Text>

              <Text fontWeight={800} fontSize={"xl"} color="primary.100">
                ₹{props.price}
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                ₹{props.price + 50}
              </Text>
            </Flex>
          </Flex>
          <Stack _hover={{ cursor: "pointer" }} w={"90%"}>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
          </Stack>
          <Flex
            borderTop={"1px"}
            p={2}
            justifyContent={"space-between"}
            h={"3.4rem"}
            w={"90%"}
            alignItems={"center"}
          >
            <Image
              src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp"
              alt="guideline"
              w={"4.2rem"}
              h={"1.5rem"}
            />
            <Text fontSize={"14px"} ml={2}>
              Follows all Max Safety measures to ensure your food is safe
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};
export default MealItem;
