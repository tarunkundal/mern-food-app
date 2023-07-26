import { Link } from "react-router-dom";
import { Flex, Heading, Image, Center } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MealHeaderItem = (props) => {
  const data = props.data;

  const settings = {
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item) => {
        return (
          <Flex
            key={item.name}
            p={{ base: 0, md: 5 }}
            m={"4"}
            justifyContent={"center"}
            rounded={"2xl"}
            maxW={{ base: "98%", md: "95%" }}
            boxShadow={"md"}
            transition={"ease-in box-shadow .5s, ease .5s"}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(.94)",
            }}
          >
            <Center _hover={{ cursor: "pointer" }}>
              <Link to={`/${item.id}`}>
                <Image
                  src={item.imageURL}
                  alt={`Picture of ${item.name}`}
                  boxSize={{ base: "100px", md: "150px" }}
                  rounded={"full"}
                  transition={"ease-in-out .8s all"}
                  _hover={{ transform: "scale(1.1) rotate(5deg) " }}
                />

                <Heading
                  fontSize={{ base: "lg", md: "xl" }}
                  color="teritory"
                  as="h5"
                  textAlign={"center"}
                  mt={2}
                >
                  {item.name}
                </Heading>
              </Link>
            </Center>
          </Flex>
        );
      })}
    </Slider>
  );
};

export default MealHeaderItem;
