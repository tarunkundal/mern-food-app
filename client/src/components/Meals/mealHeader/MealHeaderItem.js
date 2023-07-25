import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MealHeaderItem = (props) => {
  const data = props.data;

  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <>
              <Flex
                p={5}
                display={{ base: "flex", md: "inline-grid" }}
                justifyContent={"center"}
                ml={{ base: "1", md: "5rem" }}
                my={2}
                rounded={"2xl"}
                maxW="95%"
                boxShadow={"md"}
                transition={"ease-in box-shadow .5s, ease .5s"}
                _hover={{
                  boxShadow: "2xl",
                  transform: "scale(.94)",
                }}
                key={item.name}
              >
                <Box
                  boxSize={{ base: "150px", md: "200px" }}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  _hover={{ cursor: "pointer" }}
                >
                  <Link to={`/${item.id}`}>
                    <Image
                      src={item.imageURL}
                      alt={`Picture of ${item.name}`}
                      boxSize={{ base: "130px", md: "200px" }}
                      rounded={"full"}
                      transition={"ease-in-out .8s all"}
                      _hover={{ transform: "scale(1.1) rotate(5deg) " }}
                    />

                    <Heading
                      fontSize={{ base: "lg", md: "xl" }}
                      color="brown"
                      as="h5"
                      textAlign={"center"}
                      mt={2}
                    >
                      {item.name}
                    </Heading>
                  </Link>
                </Box>
              </Flex>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default MealHeaderItem;
