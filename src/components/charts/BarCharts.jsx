import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const normal = 4;
const average = 8;
const moderate = 10;
const over = 12;

const legends = [
  { color: "#90EE91", label: "normal" },
  { color: "#FFD400", label: "average" },
  { color: "#FF6200", label: "moderate" },
  { color: "#DC1C13", label: "over" },
];

const data = [
  {
    weekDay: "Mon",
    value: 9,
  },
  {
    weekDay: "Tue",
    value: 1,
  },
  {
    weekDay: "Wed",
    value: 4.3,
  },
  {
    weekDay: "Thu",
    value: 2,
  },
  {
    weekDay: "Fri",
    value: 3,
  },
  {
    weekDay: "Sat",
    value: 2.5,
  },
];

/**
 * This components represents the demo Bar-chart using the recharts Library
 *
 *  @BarChart : This is the component given by the reChart library to plot the bar chart
 *  1) data -> The data that we want to plot on the graph
 *
 *  @Bar : The bar that will ploted on the graph
 *  1) fill -> The color of the bar that will be ploted on the graph, here we have used the map function because we  want to have diffrent colors for each bar of the graph so we give the fill property an unique gradient id for the gradients
 *  2) cell -> Here we have used the cell property because we  want each bar of the graph with a diffrent gradient
 *  3) fill Id -> In order to specify the unique gradient for each bar we need to add the gradient Id in each bar spreately
 *
 *  @Legend : To display the legend on the basis of the of the predetermined range
 *  1) payload -> The value of the legend along with the color of the legend bullet is set by using the map function over here
 *  2) formatter -> If we want the text of the legent to be in simple black color then we need to foramat the value other wise it will take the default color specified in the payload
 *
 *  @cons
 *  1) Even though we have only 4 gradient options but we need to create a linear gradient for each unique bar
 *
 *  @solutions : These are possible but not practically tested
 *  1) Create a unique gradients for each range and add the range name as the gradient Id, and then on the basis of the value determine the range name and then pass that range name as the fill Id
 *
 * @returns A Bar-Chart
 */
const BarCharts = () => {
  return (
    <div style={{ padding: "25px", margin: "20px auto" }}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="1 0"
            horizontal={true}
            vertical={false}
            opacity={0.3}
          />
          <ReferenceLine y={normal} stroke="green" />
          <ReferenceLine y={average} stroke="yellow" />
          <ReferenceLine y={moderate} stroke="orange" />
          <ReferenceLine y={over} stroke="red" />
          <XAxis dataKey={"weekDay"} />
          <YAxis />
          <Tooltip cursor={{ fill: "transparent" }} />
          <defs>
            {data.map((item, index) => {
              if (item.value <= normal) {
                return (
                  <linearGradient
                    key={index}
                    id={`colorUv${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    spreadMethod="reflect"
                  >
                    <stop offset="0" stopColor={"#90EE91"} />
                    <stop offset="1" stopColor={"#D6F6D5"} />
                  </linearGradient>
                );
              } else if (item.value <= average) {
                return (
                  <linearGradient
                    key={index}
                    id={`colorUv${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    spreadMethod="reflect"
                  >
                    <stop offset="0" stopColor={"#FFD400"} />
                    <stop offset="1" stopColor={"#FFFFB7"} />
                  </linearGradient>
                );
              } else if (item.value <= moderate) {
                return (
                  <linearGradient
                    key={index}
                    id={`colorUv${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    spreadMethod="reflect"
                  >
                    <stop offset="0" stopColor={"#FF6200"} />
                    <stop offset="1" stopColor={"#FDB777"} />
                  </linearGradient>
                );
              } else {
                return (
                  <linearGradient
                    key={index}
                    id={`colorUv${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    spreadMethod="reflect"
                  >
                    <stop offset="0" stopColor={"#DC1C13"} />
                    <stop offset="1" stopColor={"#F1959B"} />
                  </linearGradient>
                );
              }
            })}
          </defs>

          <Legend
            iconType="circle"
            payload={legends.map((item, index) => ({
              value: item.label,
              color: item.color,
            }))}
            formatter={(value) => (
              <span style={{ color: "black", marginInline: "15px" }}>
                {value}
              </span>
            )}
          />

          <Bar dataKey={"value"} barSize={40}>
            {data.map((item, index) => {
              const string = `url(#colorUv${index})`;
              return <Cell key={index} fill={string} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
