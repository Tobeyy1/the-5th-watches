"use client";

import { FunctionComponent, useState } from "react";
import classes from "./NavBar.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "@/app/store/store";
import { usePathname } from "next/navigation";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCollection, setShowCollection] = useState<boolean>(false);
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const showCartHandler = () => {
    // Display cart by communicating with the store
    dispatch(showCartActions.setShowCart());
  };

  return (
    <div className={classes.container}>
      <div className={classes.content__container}>
        <section className={classes.name}>
          <Link href="#hero">THE 5TH</Link>
        </section>
        {pathname?.split("/")[1] !== "shop" && (
          <Link
            href={"/shop/bilbao"}
            className={classes.menu__cta}
            // onClick={() => setShowMenu(!showMenu)}
          >
            Shop
          </Link>
        )}
        {pathname?.split("/")[1] === "shop" && (
          <>
            <button
              type="button"
              className={classes.collection__cta}
              onClick={() => setShowCollection(!showCollection)}
            >
              View Collections
            </button>
            <span className={classes.cart} onClick={showCartHandler}>
              {cart.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={classes.item__number}
                >
                  {cart.length}
                </motion.span>
              )}
              <BsCart3 />
            </span>
          </>
        )}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ width: 100, height: 100 }}
              animate={{ width: "100%", height: "100vh", borderRadius: "0px" }}
              exit={{
                width: 10,
                height: 10,
                borderRadius: "100vw 100vw 100vw 0",
                top: "100vh",
                left: "0px",
              }}
              transition={{
                duration: 0.25,
              }}
              className={classes.menu}
            ></motion.div>
          )}
          {showCollection && (
            <div className={classes.collection}>
              <section className={classes.header}>Our Collections</section>
              <ul className={classes.collection__list}>
                <li
                  className={
                    pathname?.split("/")[2] === "paris"
                      ? classes.active__list__item
                      : classes.list__item
                  }
                >
                  <Link href={"/shop/paris"}>Paris</Link>
                </li>
                <li
                  className={
                    pathname?.split("/")[2] === "baja"
                      ? classes.active__list__item
                      : classes.list__item
                  }
                >
                  <Link href={"/shop/baja"}>Baja</Link>
                </li>
                <li
                  className={
                    pathname?.split("/")[2] === "melbourne"
                      ? classes.active__list__item
                      : classes.list__item
                  }
                >
                  <Link href={"/shop/melbourne"}>Melbourne</Link>
                </li>
                <li
                  className={
                    pathname?.split("/")[2] === "london"
                      ? classes.active__list__item
                      : classes.list__item
                  }
                >
                  <Link href={"/shop/london"}>London</Link>
                </li>
                <li
                  className={
                    pathname?.split("/")[2] === "bilbao"
                      ? classes.active__list__item
                      : classes.list__item
                  }
                >
                  <Link href={"/shop/bilbao"}>Bilbao</Link>
                </li>
                <li
                  className={
                    pathname?.split("/")[2] === "new-york"
                      ? classes.active__list__item
                      : classes.list__item
                  }
                >
                  <Link href={"/shop/new-york"}>New York</Link>
                </li>
                <li
                  className={
                    pathname?.split("/")[2] === "swiss-made"
                      ? classes.active__list__item
                      : classes.list__item
                  }
                >
                  <Link href={"/shop/swiss-made"}>Swiss Made</Link>
                </li>
                <li
                  className={
                    pathname?.split("/")[2] === "limited-series"
                      ? classes.active__list__item
                      : classes.list__item
                  }
                >
                  <Link href={"/shop/limited-series"}>Limited Series</Link>
                </li>
              </ul>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
