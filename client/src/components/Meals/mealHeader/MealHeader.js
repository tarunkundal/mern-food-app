import { Box, Center, Heading, Stack } from "@chakra-ui/react";
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
      "https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGglMjBpbmRpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "North Indian",
    id: "north indian",
  },
  {
    imageURL: "https://www.chefspencil.com/wp-content/uploads/Idli.jpg.webp",
    name: "South Indian",
    id: "south indian",
  },
];

const MealHeader = () => {
  return (
    <>
      <Box mt="3rem" bgColor={"gray.50"} py={10} color={"primary.100"}>
        <Heading
          textAlign={{ base: "center", md: "left" }}
          ml={{ base: "0", md: "5rem" }}
          mb="2rem"
          fontWeight={"bold"}
        >
          Inspiration for your first order
        </Heading>

        <MealHeaderItem data={data} />
      </Box>
    </>
  );
};

export default MealHeader;
