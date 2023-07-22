import { FunctionComponent, useState, useEffect } from "react";
import classes from "./Items.module.scss";
import { useSelector } from "react-redux";

interface AddToCartButtonProps {
  addToCartHandler: () => void;
  itemName: string;
}

const AddToCartButton: FunctionComponent<AddToCartButtonProps> = ({
  addToCartHandler,
  itemName,
}) => {
  const [inCart, setInCart] = useState(false);
  const cartItems = useSelector((state: any) => state.cart.cart);

  // check if item is in cart
  const isItemInCart = cartItems.some(
    (cartItem: any) => cartItem.name === itemName
  );

  useEffect(() => {
    // set state if item is in cart
    if (isItemInCart) {
      setInCart(true);
    }
  }, [isItemInCart, cartItems]);

  // render button text based on whether item is in cart or not
  const buttonText = inCart ? "IN CART" : "ADD TO CART";

  return (
    <button
      type="button"
      className={classes.cta}
      onClick={() => {
        if (!isItemInCart) {
          addToCartHandler();
        }
      }}
    >
      {buttonText}
    </button>
  );
};

export default AddToCartButton;
