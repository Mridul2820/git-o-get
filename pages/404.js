import React from "react";
import dynamic from "next/dynamic";

const NotFound = dynamic(() => import("../components/404/NotFound"));

const Custom404 = () => {
  return (
    <NotFound image="404" message="Oops! We are unable to found the page :) " />
  );
};

export default Custom404;
