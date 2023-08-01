import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const refLine = 100;
const data = [
  {
    month: "jan",
    weight: 110,
  },
  {
    month: "feb",
    weight: 90,
  },
  {
    month: "mar",
    weight: 80,
  },
  {
    month: "apr",
    weight: 70,
  },
  {
    month: "may",
    weight: 75,
  },
  {
    month: "jun",
    weight: 80,
  },
  {
    month: "jul",
    weight: 85,
  },
  {
    month: "sept",
    weight: 75,
  },
  {
    month: "oct",
    weight: 70,
  },
  {
    month: "nov",
    weight: 68,
  },
  {
    month: "dec",
    weight: 65,
  },
];

/**
 *  This is a custom chart component that explain how to use a line chart with refrence area and refrence line
 *
 * @RefrenceLine : This is the component thats takes a point on x or y axis and creates a refrence line we can customise the line and my making it dashed or changing the color along with many other properties
 *
 * 1) y : specifies the point on y axis for the refrence line
 * 2) stroke : the color  of the refrence line
 *
 * @ReferenceArea : This component give the area that you want to be highlighted in the graph and this can be achived by spcifying the  x or  y coordinates
 *
 * 1) You can also give both x & y coordinates if you  just want to highlight a block
 * 2) If you do not specify the x coordinates then the entire area of x axis with be highlighted same for the y axis
 * 3) Opacity and the color of the area can also be specified by using stroke,fill & opacity properties
 * 4) y1 & y2 : the lower limit and the upper limit of the y axis
 *
 * @Line : This components is used to specify the line that we want to plot in the graph
 *
 * 1) dataKey : The key of the data that we want to plot
 * 2) dot : to spcify the properties of the dot in the in active state
 * 3) active dot : to specify the property of the dot in the active state
 * 4) strokeDasharray : to make the ploted line dashed / use "0 0" if you want a solid line
 *
 * @Recharts : https://recharts.org
 *
 * @returns A chart using that has a refrence line and a higlighted refrence area using the rechart library
 */
export const Recharts = () => {
  return (
    <div style={{ padding: "25px", margin: "20px auto" }}>
      <LineChart
        width={1000}
        height={350}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis dataKey="weight" />
        <Tooltip />
        <Legend />

        <ReferenceLine y={refLine} stroke="#a476ff" />
        <ReferenceArea
          y1={refLine - 10}
          y2={refLine + 10}
          stroke="purple"
          fill={"#F4E3FF"}
          strokeOpacity={0}
        />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#8884d8"
          dot={{ fill: "purple", r: 5, strokeDasharray: "0 0" }}
          activeDot={{ fill: "purple", r: 6 }}
          strokeDasharray="2.5 2.5"
        />
      </LineChart>
    </div>
  );
};
