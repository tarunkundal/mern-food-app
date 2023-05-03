import { Button, Flex, background } from "@chakra-ui/react";

const LoadMoreButton = (props) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Button
        {...props}
        px={4}
        my={5}
        width={"10rem"}
        fontSize={"md"}
        bg={"#8a2b06"}
        color={"white"}
        boxShadow={"1px 2px 5px -8px brown"}
        onClick={props.onClick}
        transition="width .2s,fontSize .2s, background .1s, rotate .3s,"
        _hover={{
          bg: "#641e03",
          width: "10.5rem",
          background: "red.900",
          fontsize: "xl",
          rotate: "180deg",
        }}
      >
        Load More...
      </Button>
    </Flex>
  );
};

export default LoadMoreButton;
