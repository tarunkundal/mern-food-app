import { useState } from "react";
import Input from "../../UI/Input";
import { Button, Center } from "@chakra-ui/react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [initialAmount, setInitialAmount] = useState("1");

  const updatedInputQuantity = (updatedMealsQuantity) => {
    setInitialAmount(updatedMealsQuantity);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = initialAmount;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmountNumber.length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return setAmountIsValid(false);
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        mealsQuantity={updatedInputQuantity}
        label="Quantanity"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Center>
        <Button
          type="submit"
          color={"white"}
          alignContent={"center"}
          bg="primary.100"
          _hover={{ bg: "primary.400" }}
          mt={3}
          size={"sm"}
        >
          Add Item
        </Button>
      </Center>
      {!amountIsValid && <p>Please enter the valid Amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
