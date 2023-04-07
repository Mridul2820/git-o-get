import React from "react";
import styled, { keyframes } from "styled-components";

const PuffLoader = () => {
  return (
    <Loader>
      <Circle1></Circle1>
      <Circle2></Circle2>
    </Loader>
  );
};

const Loader = styled.span`
  position: relative;
  width: 120px;
  height: 120px;
`;

const ScaleAnim = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const OpaAnim = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Circle1 = styled.span`
  position: absolute;
  height: 120px;
  width: 120px;
  opacity: 1;
  top: 0px;
  left: 0px;
  border-width: thick;
  border-style: solid;
  border-color: #9a65fd;
  border-image: initial;
  border-radius: 50%;
  animation: 2s cubic-bezier(0.165, 0.84, 0.44, 1) -1s infinite normal none running
      ${ScaleAnim},
    cubic-bezier(0.3, 0.61, 0.355, 1) normal none running ${OpaAnim};
`;

const Circle2 = styled.span`
  position: absolute;
  height: 120px;
  width: 120px;
  opacity: 1;
  top: 0px;
  left: 0px;
  border-width: thick;
  border-style: solid;
  border-color: #9a65fd;
  border-image: initial;
  border-radius: 50%;
  animation: 2s cubic-bezier(0.165, 0.84, 0.44, 1) 0s infinite normal none
      running ${ScaleAnim},
    cubic-bezier(0.3, 0.61, 0.355, 1) normal none running ${OpaAnim};
`;

export default PuffLoader;
