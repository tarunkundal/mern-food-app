import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MealHeaderItem = (props) => {
  const data = props.data;

  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
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
                transition={" box-shadow .5s, ease .5s"}
                _hover={{ boxShadow: "2xl" }}
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
                      boxShadow={"1px 2px 4px 1px rgba(138, 43, 6,0.4)"}
                    />

                    <Box
                      fontSize={{ base: "lg", md: "xl" }}
                      color="brown"
                      as="h5"
                      textAlign={"center"}
                      mt={2}
                    >
                      {item.name}
                    </Box>
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
