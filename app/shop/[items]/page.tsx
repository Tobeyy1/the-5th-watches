"use client";

import { FunctionComponent, useState, useRef, useEffect } from "react";
import classes from "./Items.module.scss";
import NavBar from "@/app/components/NavBar/Navbar";
import Image, { StaticImageData } from "next/image";
import PreviousArrow from "./PreviousArrow";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "@/app/components/utils/Cart/Cart";
import { useSelector } from "react-redux";
import NextArrow from "./NextArrow";
import { usePathname } from "next/navigation";
import bilbaoCollection from "@/app/components/utils/collections/bilbao";
import parisCollection from "@/app/components/utils/collections/paris";
import milanCollection from "@/app/components/utils/collections/milan";
import bajaCollection from "@/app/components/utils/collections/baja";
import londonCollection from "@/app/components/utils/collections/london";
import melbourneCollection from "@/app/components/utils/collections/melbourne";
import swissMadeCollection from "@/app/components/utils/collections/swiss-made";
import limitedSeriesCollection from "@/app/components/utils/collections/limited-series";
import straps from "@/app/components/utils/collections/straps";
import newYorkCollection from "@/app/components/utils/collections/new-york";
import LoadingSpinner from "@/app/components/utils/LoadingSpinner/LoadingSpinner";
import { cartActions } from "@/app/store/store";
import { useDispatch } from "react-redux";
import AddToCartButton from "@/app/shop/[items]/AddToCartButton";

interface ItemsProps {}

interface item {
  name: string;
  src: StaticImageData;
  bgColor: string;
  amount: string;
  theme: string;
  collection: string;
}

const Items: FunctionComponent<ItemsProps> = () => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [directionAnimation, setDirectionAnimation] = useState<string>("right");
  const showCart = useSelector((state: any) => state.showCart.showCart);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const collectionHandler = () => {
    if (pathname?.split("/")[2] === "straps") return straps;
    if (pathname?.split("/")[2] === "bilbao") return bilbaoCollection;
    if (pathname?.split("/")[2] === "paris") return parisCollection;
    if (pathname?.split("/")[2] === "milan") return milanCollection;
    if (pathname?.split("/")[2] === "baja") return bajaCollection;
    if (pathname?.split("/")[2] === "london") return londonCollection;
    if (pathname?.split("/")[2] === "melbourne") return melbourneCollection;
    if (pathname?.split("/")[2] === "new-york") return newYorkCollection;
    if (pathname?.split("/")[2] === "swiss-made") return swissMadeCollection;
    if (pathname?.split("/")[2] === "limited-series")
      return limitedSeriesCollection;
  };

  const collection = collectionHandler();

  const handleItemClick = (direction: number) => {
    const newItemIndex = currentItem + direction;
    if (!componentArray) return;

    if (newItemIndex < 0 || newItemIndex >= componentArray.length) return;
    if (direction === -1) setDirectionAnimation("left");
    if (direction === 1) setDirectionAnimation("right");
    setCurrentItem(newItemIndex);
    // if (movieListRef.current) {
    //   movieListRef.current.style.left = `-${newMovieIndex * 100}vw`;
    // }
  };

  const addToCartHandler = () => {
    if (!collection) return;
    const cartItem = collection[currentItem];
    console.log("Cart Item: ", cartItem);
    dispatch(
      cartActions.addItem({
        name: cartItem.name,
        id: cartItem.name,
        quantity: 1,
        amount: +cartItem.amount,
        collection: cartItem.collection,
        src: cartItem.src,
        bgColor: cartItem.bgColor,
      })
    );
  };

  const componentArray = collection?.map((item: item, index: number) => (
    <motion.div
      initial={
        directionAnimation === "left"
          ? {
              x: "-100vw",
            }
          : {
              x: "100vw",
            }
      }
      animate={{
        x: 0,
      }}
      exit={
        directionAnimation === "left"
          ? {
              x: "100vw",
            }
          : {
              x: "-100vw",
            }
      }
      transition={{
        type: "tween",
      }}
      className={`${
        item.theme === "light"
          ? classes.image__container
          : classes.dark__image__container
      }`}
      key={index}
    >
      <motion.div
        initial={{
          y: "100",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: "100",
          opacity: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className={classes.item__count}
      >
        <span>{index + 1}</span>
        <span>{collection.length}</span>
      </motion.div>
      <LoadingSpinner />
      <Image src={item.src} alt={"Watch"} fill className={classes.image} />
      <motion.span
        initial={{
          y: "100",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: "100",
          opacity: 0,
        }}
        transition={{
          delay: 0.35,
        }}
      >
        {item.name}
      </motion.span>
      <motion.div
        initial={{
          y: "100",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: "100",
          opacity: 0,
        }}
        transition={{
          delay: 0.4,
        }}
        className={classes.amount}
      >
        <span>${item.amount}</span>
        <AddToCartButton
          addToCartHandler={addToCartHandler}
          itemName={item.name}
        />
      </motion.div>
    </motion.div>
  ));

  useEffect(() => {
    if (containerRef.current && collection) {
      containerRef.current.style.backgroundColor =
        collection[currentItem].bgColor;
      //   containerRef.current.style.color = collection[currentItem].theme;
    }
  }, [currentItem, collection]);

  return (
    <div className={classes.container} ref={containerRef}>
      <NavBar />
      <div className={classes.item__container}>
        <AnimatePresence mode="popLayout" initial={false}>
          {componentArray && componentArray[currentItem]}
        </AnimatePresence>
        <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
      </div>
      <div className={classes.navigation}>
        <PreviousArrow handleItemClick={handleItemClick} />
        <NextArrow handleItemClick={handleItemClick} />
      </div>
    </div>
  );
};

export default Items;
