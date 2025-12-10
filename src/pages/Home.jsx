import React from "react";
import Banner from "../components/home/Banner";
import LatestClubs from "../components/home/LatestClubs";
import UpcomingEvents from "../components/home/UpcomingEvents";
import JoinClubero from "../components/home/JoinClubero";

const Home = () => {
  return (
    <div >
      <Banner/>
      <LatestClubs/>
      <UpcomingEvents/>
      <JoinClubero/>
    </div>
  );
};

export default Home;
