import React from "react";
import "./index.scss";
import DelayedComponent from "../Delayed";
import PathData from "./PathsData";



const colors = {
  primary: "#009fc9",
};

const MySvgPath = ({ path }) => {
  return (
    <path
      d={path}
      className="path"
      fill="none"
      stroke={colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="20"
    />
  );
};

const Render1 = () => {
  return (
    <g>
      <MySvgPath path={PathData.far} />
      <DelayedComponent waitBeforeShow={500}>
        <MySvgPath path={PathData.z_1} />
      </DelayedComponent>
      <DelayedComponent waitBeforeShow={1000}>
        <path
          d={PathData.in}
          className="long"
          fill="none"
          stroke={colors.primary}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="20"
          strokeDashoffset="2220"
        />
      </DelayedComponent>

      <DelayedComponent waitBeforeShow={5000}>
        <MySvgPath path={PathData.far_dot} />
      </DelayedComponent>

      <DelayedComponent waitBeforeShow={5500}>
        <MySvgPath path={PathData.z_dot} />
      </DelayedComponent>

      <DelayedComponent waitBeforeShow={6000}>
        <MySvgPath path={PathData.in_dot} />
      </DelayedComponent>

      <DelayedComponent waitBeforeShow={7000}>
        <MySvgPath path={PathData.z_2} />
      </DelayedComponent>
    </g>
  );
};

const Render2 = () => {
  let wait = 3000;
  let step = 200;
  return (
    <g>
      <DelayedComponent waitBeforeShow={wait}>
        <MySvgPath path={PathData.f} />

        <DelayedComponent waitBeforeShow={step}>
          <MySvgPath path={PathData.i} />
        </DelayedComponent>

        <DelayedComponent waitBeforeShow={step * 1.5}>
          <MySvgPath path={PathData.i_dot} />
        </DelayedComponent>

        <DelayedComponent waitBeforeShow={step * 2}>
          <MySvgPath path={PathData.r} />
        </DelayedComponent>

        <DelayedComponent waitBeforeShow={step * 3}>
          <MySvgPath path={PathData.o_1} />
        </DelayedComponent>

        <DelayedComponent waitBeforeShow={step * 4}>
          <MySvgPath path={PathData.o_2} />
        </DelayedComponent>

        <DelayedComponent waitBeforeShow={step * 5}>
          <MySvgPath path={PathData.zi} />
        </DelayedComponent>

        <DelayedComponent waitBeforeShow={step * 6}>
          <MySvgPath path={PathData.zi_dot} />
        </DelayedComponent>

        <DelayedComponent waitBeforeShow={step * 7}>
          <MySvgPath path={PathData.decor} />
        </DelayedComponent>
      </DelayedComponent>
    </g>
  );
};
const Logo = () => {
  return (
    <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000">
        <Render1 />
        <Render2 />
      </svg>
    </div>
  );
};

export default Logo;
