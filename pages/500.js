import React from "react";
import dynamic from "next/dynamic";

const NotFound = dynamic(() => import("../components/404/NotFound"));

const Custom500 = () => {
  return <NotFound image="500" message="No user found with that user name" />;
};

export default Custom500;
