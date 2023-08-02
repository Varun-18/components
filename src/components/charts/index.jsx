import React from "react";
import { useState } from "react";
import BarCharts from "./BarCharts";
import { Recharts } from "./Recharts";

const Charts = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "25px auto",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <button onClick={() => setToggle(true)}>LineChart</button>
        <button onClick={() => setToggle(false)}>BarChart</button>
      </div>
      <div>{toggle ? <Recharts /> : <BarCharts />}</div>
    </div>
  );
};

export default Charts;
