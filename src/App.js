import React from "react";
import ReactDOM from "react-dom";
import { Chart } from "react-charts";

import useDemoConfig from "./useDemoConfig";
import ResizableBox from "./ResizableBox";
import "./styles.css";

export default function App() {

  const { data, randomizeData } = useDemoConfig({
    series: 10,
  });

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
        // filterTicks: (ticks) =>
        //   ticks.filter((date) => +timeDay.floor(date) === +date),
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <ResizableBox>
        <Chart data={data} series={series} axes={axes} tooltip />
      </ResizableBox>
    </>
  );
}
