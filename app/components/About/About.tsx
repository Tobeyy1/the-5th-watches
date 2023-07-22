"use client";

import { FunctionComponent } from "react";
import classes from "./About.module.scss";
import Image from "next/image";
import COBALT from "../../assets/bilbao/cobalt.png";
import BLACKANDTAN from "../../assets/melbourne/blackAndTan.png";
import ASTRE from "../../assets/paris/astre.png";
import MINUIT from "../../assets/paris/minuit.png";
import { motion } from "framer-motion";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <div className={classes.container}>
      <section className={classes.watch__container}>
        <motion.div
          initial={{
            y: "100px",
            opacity: 0,
          }}
          whileInView={{
            y: "0%",
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            type: "tween",
          }}
          className={classes.image__container}
        >
          <Image src={COBALT} alt={"Watch"} fill className={classes.image} />
        </motion.div>{" "}
        <motion.div
          initial={{
            y: "100px",
            opacity: 0,
          }}
          whileInView={{
            y: "0%",
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            type: "tween",
          }}
          className={classes.image__container}
        >
          <Image src={ASTRE} alt={"Watch"} fill className={classes.image} />
        </motion.div>{" "}
        <motion.div
          initial={{
            y: "100px",
            opacity: 0,
          }}
          whileInView={{
            y: "0%",
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            type: "tween",
          }}
          className={classes.image__container}
        >
          <Image
            src={BLACKANDTAN}
            alt={"Watch"}
            fill
            className={classes.image}
          />
        </motion.div>{" "}
        <motion.div
          initial={{
            y: "100px",
            opacity: 0,
          }}
          whileInView={{
            y: "0%",
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            type: "tween",
          }}
          className={classes.image__container}
        >
          <Image src={MINUIT} alt={"Watch"} fill className={classes.image} />
        </motion.div>
      </section>
      <section className={classes.text}>
        <header>
          <motion.h2
            initial={{
              y: "100%",
            }}
            whileInView={{
              y: "0",
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            About Us
          </motion.h2>
        </header>
        <p>
          We are The 5TH, a contemporary Melbourne based watch company, offering
          timless designs in small, limited runs. With a focus on exceptional
          quality and impeccable details, our timepieces are a guiding accessory
          that subtly elevated the wearer&apos;s image now, and for the time to
          come.
        </p>
        <p>
          The 5TH continues to develop new collections and offerings, that speak
          to a well-designed life and time well spent. Designs are created with
          an uncompromising attention to quality, and dedication to providing
          the best possible features at an affordable price.
        </p>
      </section>
    </div>
  );
};

export default About;
