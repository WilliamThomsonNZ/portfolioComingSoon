import React, { useEffect, useState, useRef } from "react";
import { heroVariants } from "../../FramerVariants";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import styles from "../../styles/home.module.scss";
import useWindowWidth from "../../utils/useWindowWidth";

const Hero = () => {
  const controls = useAnimation();
  const width = useWindowWidth(700);
  const [sliderWidth, setSliderWidth] = useState(0);
  const slider = useRef(null);

  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const timeOffset = 12;
  const NewZealandTime = new Date(utcTime + 3600000 * timeOffset);
  const hours =
    (NewZealandTime.getHours() + 1) > 12
      ? (NewZealandTime.getHours() + 1) - 12
      : (NewZealandTime.getHours() + 1);

  const morning = NewZealandTime.getHours() > 11 ? "PM" : "AM";
  const time = `${hours}:${NewZealandTime.getMinutes() < 10 ? "0" : ""
    }${NewZealandTime.getMinutes()} ${morning}`;

  const textCarousel = {
    initial: {
      x: 0,
    },
    animate: {
      x: `-${sliderWidth - sliderWidth / 2.5 + 5}px`,
      transition: {
        repeat: Infinity,
        duration: 100,
        ease: ["linear"],
      },
    },
  };

  useEffect(() => {
    setSliderWidth(slider.current.offsetWidth);
  }, [width]);

  useEffect(() => {
    setSliderWidth(slider.current.offsetWidth);
    setTimeout(() => {
      controls.start("animate");
    }, 1000);
  }, [slider.current]);
  const introText = "COMING SOON".split("");
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <motion.header
          className={styles.header}
          variants={heroVariants.fade}
          initial={"initial"}
          animate={"animate"}
        >
          <h2 className={styles.logo}>
            <span>
              WILL
            </span>
            <span>THOMSON</span>
          </h2>
          <h6 className={styles.headingText}>INDEPENDENT CREATIVE DEVELOPER</h6>
        </motion.header>
        <motion.div className={styles.scrollWrapper}>
          <div className={styles.scrollContainer}>
            <motion.div
              className={styles.scrollInnerContainer}
              variants={textCarousel}
              ref={slider}
              animate={controls}
              initial={"initial"}
            >
              <motion.span
                className={styles.slidingText}
                variants={heroVariants.letterContainer}
                initial={"initial"}
                animate={"animate"}
              >
                {introText.map((letter, index) => (
                  <motion.span
                    key={`${letter}${index}`}
                    className={styles.slidingTextLetter}
                    variants={heroVariants.letter}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className={styles.slidingText}
                variants={heroVariants.fadeText}
              >
                COMING SOON
              </motion.span>
              <motion.span
                className={styles.slidingText}
                variants={heroVariants.fadeText}
              >
                COMING SOON
              </motion.span>
              <motion.span
                className={styles.slidingText}
                variants={heroVariants.fadeText}
              >
                COMING SOON
              </motion.span>
              <motion.span
                className={styles.slidingText}
                variants={heroVariants.fadeText}
              >
                COMING SOON
              </motion.span>
              <motion.span
                className={styles.slidingText}
                variants={heroVariants.fadeText}
              >
                COMING SOON
              </motion.span>
              <motion.span
                className={styles.slidingText}
                variants={heroVariants.fadeText}
              >
                COMING SOON
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className={styles.contactDetailsContainer}
          variants={heroVariants.fade}
          initial={"initial"}
          animate={"animate"}
        >
          <section className={styles.contactDetailsDesktop}>
            <div className={styles.contactDetails}>
              <h6 className={styles.sectionTitle}>Contact details</h6>
              <a
                href={"mailto:hello@williamthomson.co.nz"}
                rel={"noreferrer"}
                className={styles.socialLink}
                target={"_blank"}
              >
                hello@williamthomson.co.nz
              </a>
              <span className={styles.socialLink}>Discord Willl#8451</span>
            </div>
          </section>
          <section className={styles.socials}>
            <h6 className={styles.sectionTitle}>Socials</h6>
            <a
              href={"https://twitter.com/willthomson__"}
              rel={"noreferrer"}
              className={styles.socialLink}
              target={"_blank"}
            >
              Twitter
            </a>
            {/* <a href={"#"} rel={"noreffer"} className={styles.socialLink}>
              Linkedin
            </a> */}
            <a
              href={"https://github.com/WilliamThomsonNZ"}
              rel={"noreferrer"}
              className={styles.socialLink}
              target={"_blank"}
            >
              Github
            </a>
          </section>
          <div className={styles.location}>
            <h6 className={styles.sectionTitle}>LOCAL TIME</h6>
            <span className={styles.socialLink}>{time}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
