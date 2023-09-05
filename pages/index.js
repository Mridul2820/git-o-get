import React from "react";
import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("../components/content/HomeContent"));

const Home = () => {
  return <HomeContent />;
};

export default Home;
