// https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf
import { Flex, Image, Text } from "@chakra-ui/react";
import BodyCom1 from "./BodyCom1";
import BodyCom2 from "./BodyCom2";

const data = [
  {
    id: "1",
    title: "No Minimum Order",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6TsIDzoJ73Wmip2jiA1JI-ziWwfBZ_WF3T91lBhccUWDYQ06z",
    descripition:
      "Order in for yourself or for the group, with no restrictions on order value",
  },
  {
    id: "2",
    title: "Live Order Tracking",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTauM6Aepyki3qXX1erbV_C2eljD6PH_4Tapy5j5qoroPgesAa",
    descripition:
      "Know where your order is at all times, from the restaurant to your doorstep",
  },
  {
    id: "3",
    title: "Lightning-Fast Delivery",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTqIT0kuCzpv9Ny_cVEnWwy3tGKv8UAT3Cy2ZTFHSJ3eskZAZy",
    descripition:
      "Experience Mealster's superfast delivery for food delivered fresh & on time",
  },
];

const Body = () => {
  return (
    <>
      <Flex
        py="2rem"
        h="450px"
        px={{ base: "", md: "2rem" }}
        justifyContent={"space-around"}
        bg={"secondary"}
      >
        {data.map((item) => {
          return (
            <Flex
              key={item.id}
              flexDirection={"column"}
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"space-between"}
              px="5px"
              py="1rem"
              w="300px"
              bg={{ base: "none", md: "none" }}
              borderTop={"2px"}
              borderColor={"primary.100"}
            >
              <Image
                rounded={"lg"}
                src={item.img}
                alt={item.title}
                w="250px"
                height={{ base: "55%", md: "65%" }}
                boxShadow={"2xl"}
              />

              <Text
                fontWeight={"700"}
                fontFamily={"open sans"}
                color="brown"
                fontSize={"18px"}
              >
                {item.title}
              </Text>
              <Text fontSize={{ base: "14px", md: "1rem" }}>
                {item.descripition}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <BodyCom1 />
      <BodyCom2 />
    </>
  );
};

export default Body;
