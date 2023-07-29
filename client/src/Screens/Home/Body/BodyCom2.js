import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const BodyCom2 = () => {
  return (
    <Flex
      w={"full"}
      p={5}
      px={"5%"}
      h={"550px"}
      bgColor={"secondary"}
      justifyContent={"space-between"}
    >
      <Image
        borderRadius={"xl"}
        w={"23%"}
        src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/13/9d/2f/139d2fd2-7167-4a62-3c9e-5ed3dd59523c/a05f9b6e-2717-4213-8f78-f08ea7129c23_1india.jpg/460x0w.webp"
      />
      <Image
        borderRadius={"xl"}
        w={"23%"}
        boxShadow={"2xl"}
        src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/49/f3/ad/49f3ad34-29b8-d636-ff09-5310cf39a144/4922ae19-1779-4ac4-aacf-706a1c1ece4c_2india.jpg/460x0w.webp"
      />
      <Image
        borderRadius={"xl"}
        w={"23%"}
        src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/b7/1f/a1/b71fa10f-98bf-06fe-575f-15b397a7afeb/3a03b70c-78dd-418d-b0c3-3024a0e2ce12_3india.jpg/460x0w.webp"
      />
      <Image
        borderRadius={"xl"}
        boxShadow={"2xl"}
        w={"23%"}
        src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/8f/2e/51/8f2e51cd-bd52-592f-5350-0b9aaeed920d/06b78d3a-55df-4211-a8cc-cc3902807977_4india.jpg/460x0w.webp"
      />
    </Flex>
  );
};

export default BodyCom2;

{
  /* <Image
  src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
  alt="bg-food"
/> */
}
