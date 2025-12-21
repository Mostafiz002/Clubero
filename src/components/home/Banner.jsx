import React from "react";
import leftBannerImg from "../../assets/hero-left.webp";
import rightBannerImg from "../../assets/hero-right.webp";
import peopleBannerImg from "../../assets/people-1.webp";
import ballBannerImg from "../../assets/ball.webp";
import heartBannerImg from "../../assets/heart.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-router";

const Banner = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const sideImageRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const sideImageLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1400px] mx-auto pt-0 lg:pt-17 pb-20 lg:pb-8 px-4 min-h-[80.5vh]">
      <motion.img
        variants={sideImageLeft}
        initial="hidden"
        animate="visible"
        className="hidden lg:flex w-77 object-contain"
        src={leftBannerImg}
        alt="Left Banner"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        className="col-span-2 mt-10 flex flex-col items-center"
      >
        <motion.h1
          variants={textVariant}
          custom={1}
          className=" font-[Neusans-bold] text-center text-[32px]/10 md:text-[40px]/12 text-primary"
        >
          <span>The</span>
          <motion.img
            animate={{
              rotate: [0, 45, 45, 45, 0, 0, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
            className="w-9 h-9 mx-1 inline-block"
            src={peopleBannerImg}
          />
          <span>
            people platform. <br /> Where
          </span>
          <motion.img
            src={ballBannerImg}
            className="w-9 h-9 mx-1 inline-block"
            animate={{
              rotate: [0, 0, 360, 360, 360, 0, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.4, 0.6, 1, 1],
            }}
          />
          <span>
            interests
            <br />
            become
          </span>
          <motion.img
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-9 h-9 mx-1 inline-block"
            src={heartBannerImg}
          />
          friendships.
        </motion.h1>
        <motion.p
          variants={textVariant}
          custom={2}
          className="my-6 w-full text-info md:w-120 text-center"
        >
          Whatever your interest, from hiking and reading to networking and
          skill sharing, there are thousands of people who share it on Clubero.
          Events are happening every day—sign up to join the fun.
        </motion.p>
        <motion.div variants={textVariant} custom={3}>
          <Link
            to="/clubs"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="button_primary hover:-translate-y-1 "
          >
            Join Clubs
          </Link>
        </motion.div>
      </motion.div>
      <motion.img
        variants={sideImageRight}
        initial="hidden"
        animate="visible"
        className="hidden lg:flex w-77 object-contain"
        src={rightBannerImg}
        alt="Right Banner"
      />
    </div>
  );
};

export default Banner;
