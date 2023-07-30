import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import Modal from "../UI/Modal";

const MealFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={onClose}>
          <Heading>Hello Modal</Heading>
        </Modal>
      )}
      <Flex w={"80%"} mx={"auto"} py={5}>
        <Button
          color={"primary.100"}
          bg={"secondary"}
          _hover={{ bg: "primary.100", color: "secondary" }}
          onClick={() => setIsOpen(true)}
        >
          <GiSettingsKnobs />
          <Text ml={2}>Filters</Text>
        </Button>
      </Flex>
    </>
  );
};

export default MealFilters;
