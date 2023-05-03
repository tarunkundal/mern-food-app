import {
  Box,
  Center,
  useColorModeValue,
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
        p={6}
        mb="2rem"
        maxW={"330px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
      >
        <Box
          rounded={"lg"}
          mt={-14}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 3,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"xl"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={props.image}
          />
        </Box>
        <Stack align={"center"}>
          <Heading
            fontSize={"2xl"}
            textAlign={"center"}
            fontFamily={"Open Sans"}
            fontWeight={500}
            pt="3"
          >
            {props.name}
          </Heading>
          <Text color={"gray.500"} fontSize={"sm"}>
            {foodDescripition}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"} color="brown">
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
