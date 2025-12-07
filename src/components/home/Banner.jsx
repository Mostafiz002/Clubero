import React from "react";
import leftBannerImg from "../../assets/hero-left.webp";
import rightBannerImg from "../../assets/hero-right.webp";
import peopleBannerImg from "../../assets/people-1.webp";
import ballBannerImg from "../../assets/ball.webp";
import heartBannerImg from "../../assets/heart.webp";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1380px] mx-auto pt-17 pb-20 px-4 min-h-[98vh] ">
      <img
        className="hidden lg:flex w-80"
        src={leftBannerImg}
        alt="Left Banner"
      />
      <div className="col-span-2 mt-12 flex flex-col items-center">
        <h1 className=" font-[Neusans-bold] text-center text-[40px]/12 text-primary">
          <span>The</span>
          <img className="w-9 h-9 mx-1 inline-block" src={peopleBannerImg} />
          <span>people platform. <br/> Where</span>
          <img className="w-9 h-9 mx-1 inline-block" src={ballBannerImg} />
          <span>interests<br/>become</span>
          <img className="w-9 h-9 mx-1 inline-block" src={heartBannerImg} />
          friendships.
        </h1>
        <p className="my-6 w-full text-info md:w-120 text-center">Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Clubero. Events are happening every day—sign up to join the fun</p>
        <button className="button_primary hover:-translate-y-1 ">Join Groups</button>
      </div>
      <img
        className="hidden lg:flex w-80"
        src={rightBannerImg}
        alt="Right Banner"
      />
    </div>
  );
};

export default Banner;
