"use client";

import { FunctionComponent, useRef, useState } from "react";
import classes from "./Straps.module.scss";
import Image, { StaticImageData } from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import OO1 from "../../assets/straps/Rose Gold & Peach Strap.png";
import OO2 from "../../assets/straps/Croc Leather Green Strap.png";
import OO3 from "../../assets/straps/Pebbled Leather Ruby Strap.png";
import OO4 from "../../assets/straps/Croc Leather Natural Strap.png";
import OO5 from "../../assets/straps/Snake Leather Black Strap.png";
import OO6 from "../../assets/straps/Nylon Strap Green.png";
import OO7 from "../../assets/straps/Silicon Strap Green.png";
import OO8 from "../../assets/straps/Nato Strap Navy & Rose Gold - Womens.png";
import Link from "next/link";

interface StrapsProps {}

interface Strap {
  name: string;
  src: StaticImageData;
}

const strapData = [
  {
    name: "Rose Gold & Peach Strap",
    src: OO1,
  },
  {
    name: "Croc Leather Green Strap",
    src: OO2,
  },
  {
    name: "Pebbled Leather Ruby Strap",
    src: OO3,
  },
  {
    name: "Croc Leather Natural Strap",
    src: OO4,
  },
  {
    name: "Snake Leather Black Strap",
    src: OO5,
  },
  {
    name: "Nylon Strap Green",
    src: OO6,
  },
  {
    name: "Silicon Strap Green",
    src: OO7,
  },
  {
    name: "Nato Strap Navy & Rose Gold - Womens",
    src: OO8,
  },
];

const Straps: FunctionComponent<StrapsProps> = () => {
  const [progress, setProgress] = useState<number>(0);
  const strapContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: strapContainerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    setProgress(latest * 168.5);
  });
  return (
    <div className={classes.container} ref={strapContainerRef}>
      <div>
        <header className={classes.header}>
          <h2>Watch Straps</h2>
        </header>
        <section className={classes.strap__container}>
          <div
            style={{
              left: `-${progress}%`,
            }}
          >
            {strapData.map((strap: Strap, index: number) => (
              <div className={classes.strap} key={index}>
                <div className={classes.image__container}>
                  <Image
                    src={strap.src}
                    alt={"Strap"}
                    width={400}
                    height={400}
                    className={classes.image}
                  />
                </div>
                <span>{strap.name}</span>
              </div>
            ))}
          </div>
        </section>
        <div className={classes.cta__container}>
          <Link href={"/shop/straps"} className={classes.cta}>
            SHOP STRAPS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Straps;
