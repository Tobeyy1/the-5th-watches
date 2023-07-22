"use client";

import { FunctionComponent } from "react";
import BG from "../../assets/footerBg.png";
import classes from "./Footer.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className={classes.container}>
      <section className={classes.top}>
        <div className={classes.text}>
          <span>UP TO 35% OFF</span>
          <p>
            Sleek, single tone design.
            <br />
            Limited pieces now available.
          </p>
          <motion.button
            initial={{
              scale: 1,
            }}
            whileInView={{
              scale: [1, 1.2, 1],
            }}
            className={classes.cta}
          >
            <Link href={"/shop/bilbao"}>SHOP NOW</Link>
          </motion.button>
        </div>
        <Image src={BG} alt={"Watches"} className={classes.image} fill />
      </section>
      <section className={classes.footer}>
        <div className={classes.about__us}>
          <h6>About us</h6>

          <p>
            Time is:
            <br />
            What we make it
          </p>

          <span>
            The 5TH is a contemporary Melbourne based watch company offering
            timeless designs in small, limited runs.
          </span>
        </div>
        <div className={classes.links}>
          <div className={classes.link__list}>
            <h6>shop</h6>
            <ul>
              <li>Mens Watches</li>
              <li>Womans Watches</li>
              <li>Straps</li>
              <li>Gifts</li>
            </ul>
          </div>
          <div className={classes.link__list}>
            <h6>Information</h6>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className={classes.link__list}>
            <h6>THE 5TH</h6>
            <ul>
              <li>About Us</li>
              <li>Journal</li>
              <li>Wholesale</li>
            </ul>
          </div>
        </div>

        <div className={classes.newsletter}>
          <h6>Join the 5th family</h6>

          <p>
            Keep up with latest product releases, restocks, latest offers and
            more. Sign up now.
          </p>

          <input type="email" placeholder="Enter your email address" />
          <motion.button
            initial={{
              scale: 1,
            }}
            whileInView={{
              scale: [1, 1.2, 1],
            }}
            className={classes.cta}
          >
            SUBSCRIBE
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Footer;
