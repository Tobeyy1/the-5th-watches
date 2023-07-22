"use client";

import { FunctionComponent } from "react";
import classes from "./Hero.module.scss";
import ONYX from "../../assets/bilbao/onyx.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <header className={classes.container} id="hero">
      <span className={classes.bg__text}>THE 5TH WATCHES</span>
      <div className={classes.content}>
        <motion.div className={classes.text__and__cta}>
          <motion.h1
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              delay: 0.6,
            }}
            className={classes.header__text}
          >
            The 5th
          </motion.h1>
          <motion.p
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0%",
            }}
            transition={{
              delay: 0.7,
            }}
          >
            Welcome to The 5th, the home of stylish and sophisticated
            timepieces. Our watches are not just accessories but expressions of
            personality, status, and style.
          </motion.p>

          <motion.div
            initial={{
              y: "100%",
            }}
            animate={{
              y: "0%",
            }}
            transition={{
              delay: 0.8,
            }}
            className={classes.cta__container}
          >
            <Link href={"#collections"} className={classes.cta}>
              VIEW COLLECTIONS
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className={classes.image__container}
        >
          <Image src={ONYX} alt={"onyx Watch"} fill className={classes.image} />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
