import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import {
  Box,
  Button,
  Icon,
  Stack,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const bump = keyframes`  0% {
  transform: scale(1);
}
10% {
  transform: scale(0.9);
}
30% {
  transform: scale(1.1);
}
50% {
  transform: scale(1.15);
}
100% {
  transform: scale(1);
}`;

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const headerCartButtonHandler = () => {
    props.onClickCartButton();
  };

  const { items } = cartCtx;

  useEffect(() => {
    if (items === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const preferedReducedMotion = usePrefersReducedMotion();
  const animation = preferedReducedMotion
    ? undefined
    : `${bump} 300ms ease-out`;

  return (
    <Button
      onClick={headerCartButtonHandler}
      bg={"primary.900"}
      _hover={{ bg: "primary.100" }}
      fontSize={"14px"}
      rounded={"full"}
      animation={btnIsHighLighted ? animation : ""}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Icon fontSize={"2xl"}>
          <CartIcon />
        </Icon>

        <Text display={{ base: "none", md: "block" }}>Your Cart</Text>
        <Box
          bg="teritory"
          p={"0.25rem 1rem"}
          rounded={"xl"}
          fontWeight={"bold"}
        >
          {numberOfCartItems}
        </Box>
      </Stack>
    </Button>
  );
};

export default HeaderCartButton;
