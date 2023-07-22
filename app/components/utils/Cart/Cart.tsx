import { FunctionComponent } from "react";
import classes from "./Cart.module.scss";
import { GrClose } from "react-icons/gr";
import { FaRegFolderOpen, FaTrash } from "react-icons/fa";
import COBALT from "../../../assets/bilbao/cobalt.png";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  cartActions,
  showCartActions,
  totalAmountActions,
} from "@/app/store/store";
import Link from "next/link";

interface CartProps {}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  amount: number;
  collection: string;
  src: StaticImageData;
}

const variants = {
  initial: {
    backgroundColor: "var(--white)",
  },
  animate: {
    backgroundColor: "var(--white)",
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { x: "100%", opacity: 0 },
};

const Cart: FunctionComponent<CartProps> = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cart);

  const deleteCartItemHandler = (id: string) => {
    dispatch(cartActions.deleteItem(id));
  };

  const quantityHandler = (index: number, change: number) => {
    if (change === -1) {
      dispatch(cartActions.decreaseQuantity(index));
    }
    if (change === 1) {
      dispatch(cartActions.increaseQuantity(index));
    }
  };

  const cartItemHandler = (cartItem: CartItem, index: number) => {
    return (
      <motion.li
        variants={item}
        className={classes.cart__item}
        key={cartItem.id}
      >
        <section className={classes.watch__image}>
          <div className={classes.image__container}>
            <Image
              src={cartItem.src}
              alt="watch"
              fill
              className={classes.image}
            />
          </div>
        </section>
        <section className={classes.watch__details}>
          <span>{cartItem.collection}</span>
          <p>{cartItem.name}</p>
          <div className={classes.quantity}>
            <span>Quantity</span>{" "}
            <div className={classes.quantity__control}>
              <button
                type="button"
                onClick={() => {
                  quantityHandler(index, -1);
                }}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                type="button"
                onClick={() => {
                  quantityHandler(index, 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={classes.amount}>${cartItem.amount.toFixed(2)}</div>
        </section>
        <section
          className={classes.delete}
          onClick={() => {
            deleteCartItemHandler(cartItem.id);
          }}
        >
          <FaTrash />
        </section>
      </motion.li>
    );
  };

  const totalAmountGenerator = () => {
    let totalAmount = 0;

    cartItems.map((cartItem: CartItem) => {
      const itemCost = +cartItem.amount * +cartItem.quantity;
      totalAmount = totalAmount + itemCost;
    });

    dispatch(totalAmountActions.setTotalAmount(totalAmount));

    return totalAmount.toFixed(2);
  };
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "calc(100vh - 6rem)" }}
      exit={{
        height: 0,
      }}
      className={classes.container}
    >
      <header className={classes.header}>
        <span className={classes.text}>Cart</span>
        <button
          type="button"
          title="Close Cart"
          onClick={() => dispatch(showCartActions.setShowCart())}
        >
          <GrClose />
        </button>
      </header>
      <motion.ul
        variants={variants}
        initial="initial"
        animate="animate"
        className={classes.cart}
      >
        <AnimatePresence>
          {cartItems.map((cartItem: CartItem, index: number) => {
            return cartItemHandler(cartItem, index);
          })}
        </AnimatePresence>
      </motion.ul>
      <section className={classes.footer}>
        <Link href={"/shop/checkout"} className={classes.cta} type="button">
          <span>Checkout</span>
          <span className={classes.dot}></span>
          <span>${totalAmountGenerator()} usd</span>
        </Link>
      </section>
    </motion.div>
  );
};

export default Cart;
