"use client";

import { FunctionComponent, useRef, useState, useEffect } from "react";
import classes from "./Collection.module.scss";
import Image from "next/image";
import COBALT from "../../assets/cobalt.png";
import BLEU from "../../assets/paris/bleu.png";
import FONTANA from "../../assets/milan/FONTANA.png";
import OO7 from "../../assets/london/007.png";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

interface CollectionProps {}

const Collection: FunctionComponent<CollectionProps> = () => {
  const [radius, setRadius] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setRadius(100 - +latest * 100);
  });

  return (
    <div
      className={classes.container}
      ref={containerRef}
      style={{
        borderRadius: `${radius}vw ${radius}vw 0 0`,
      }}
      id="#collection"
    >
      {radius < 50 && (
        <>
          <header>
            <motion.h2
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
            >
              Collections
            </motion.h2>
            <motion.p
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              We offer an extensive collection of timepieces for both men and
              women.
              <br />
              Our watches are designed to enhance your style and complement your
              individuality.
              <br />
              No matter the occasion, we have a collection that caters to your
              needs.
            </motion.p>
          </header>
          <section className={classes.collections}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={radius < 30 ? { y: 0, opacity: 1 } : { opacity: 0 }}
              className={classes.collection}
            >
              <div className={classes.image__container}>
                <Image
                  src={BLEU}
                  alt={"Watch"}
                  fill
                  className={classes.image}
                />
              </div>
              <div className={classes.text}>
                <span>Timeless</span>
                <h5>Paris Collection</h5>
                <Link href={"/shop/paris"} className={classes.cta}>
                  Shop Now
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={radius < 30 ? { y: 0, opacity: 1 } : { opacity: 0 }}
              transition={{
                delay: 0.1,
              }}
              className={classes.collection}
            >
              <div className={classes.image__container}>
                <Image
                  src={FONTANA}
                  alt={"Watch"}
                  fill
                  className={classes.image}
                />
              </div>
              <div className={classes.text}>
                <span>Minimal</span>
                <h5>Milan Collection</h5>
                <Link href={"/shop/milan"} className={classes.cta}>
                  Shop Now
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={radius < 30 ? { y: 0, opacity: 1 } : { opacity: 0 }}
              transition={{
                delay: 0.2,
              }}
              className={classes.collection}
            >
              <div className={classes.image__container}>
                <Image src={OO7} alt={"Watch"} fill className={classes.image} />
              </div>
              <div className={classes.text}>
                <span>Chronograph</span>
                <h5>London Collection</h5>
                <Link href={"/shop/london"} className={classes.cta}>
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </section>
        </>
      )}
    </div>
  );
};

export default Collection;
