import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { Spinner } from "@chakra-ui/react";

const Cart = (props) => {
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);
  const [orderIsSubmiting, setOrderIsSubmiting] = useState(false);
  const [didOrderSubmited, setDidOrderSubmited] = useState(false);
  const cartCtx = useContext(CartContext);

  const hasItemsInCart = cartCtx.items.length >= 1;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={Math.random().toString()}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const closeCartHandler = () => {
    props.onCloseCart();
  };

  const orderCartHandler = () => {
    setCheckoutIsShown(true);
  };

  const cancleCheckout = () => {
    setCheckoutIsShown(false);
  };

  const url =
    "https://react-http-bee73-default-rtdb.asia-southeast1.firebasedatabase.app/user-order-data.json";

  const submitOrderHandler = async (userData) => {
    setOrderIsSubmiting(true);
    setCheckoutIsShown(false);
    cartCtx.clearCart();
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        userData: userData,
        orderData: cartCtx.items,
      }),
      headers: { "Content-Type": "application/json" },
    });

    setOrderIsSubmiting(false);
    setDidOrderSubmited(true);
  };

  if (checkoutIsShown) {
    return (
      <Modal>
        <Checkout
          onCancel={cancleCheckout}
          onOrderConfirm={submitOrderHandler}
        />
      </Modal>
    );
  }

  const submitingOrderContent = (
    <h2 style={{ textAlign: "center" }}>
      Placing Order... <Spinner />{" "}
    </h2>
  );
  const orderSubmitedContent = (
    <div>
      <h1 style={{ textAlign: "center" }}>ThankYou! </h1>
      <h2 style={{ textAlign: "center" }}>Your Order is Placed Sucessfully!</h2>
      <div className={styles.actions}>
        <button className={styles.button} onClick={closeCartHandler}>
          Close
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Modal onClose={props.onCloseCart}>
        {!orderIsSubmiting && !didOrderSubmited && (
          <>
            {cartItems}
            <div className={styles.total}>
              <span>Total Amount</span>
              <span>₹{cartCtx.totalAmount.toFixed(2)}</span>
            </div>
            {checkoutIsShown && <Checkout />}
            <div className={styles.actions}>
              <button
                className={styles["button--close"]}
                onClick={closeCartHandler}
              >
                Close
              </button>
              {hasItemsInCart && (
                <button className={styles.button} onClick={orderCartHandler}>
                  Order
                </button>
              )}
            </div>
          </>
        )}

        {orderIsSubmiting && submitingOrderContent}

        {didOrderSubmited && !orderIsSubmiting && orderSubmitedContent}
      </Modal>
    </>
  );
};
export default Cart;
