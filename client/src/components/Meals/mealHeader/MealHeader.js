import { Box, Heading } from "@chakra-ui/react";
import MealHeaderItem from "./MealHeaderItem";

const data = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1606491956391-70868b5d0f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFhdiUyMGJoYWppfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Street Food",
    id: "street food",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Fast Food",
    id: "fast food",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1583337912553-c0e828c51bc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlc3NlcnRzJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Sweets",
    id: "sweet",
  },
  {
    imageURL:
      "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
    name: "North Indian",
    id: "north indian",
  },
  {
    imageURL:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    name: "South Indian",
    id: "south indian",
  },
  {
    imageURL:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    name: "Burger",
    id: "burger",
  },
];

const MealHeader = () => {
  const id = data.map((item) => item.id);
  return (
    <>
      <Box mt="3rem" bg={"secondary"} py={10} color={"primary.100"}>
        <Heading
          textAlign={{ base: "center", md: "left" }}
          ml={{ base: "0", md: "5rem" }}
          mb="2rem"
          fontWeight={"bold"}
        >
          Inspiration for your first order
        </Heading>
        <Box w={"85%"} mx={"auto"}>
          <MealHeaderItem data={data} key={id} />
        </Box>
      </Box>
    </>
  );
};

export default MealHeader;
