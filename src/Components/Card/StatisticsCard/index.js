import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  Label,
} from "recharts";

const StatisticsCard = ({ type }) => {
  const data = [
    {
      name: "Jan",
      "Total Views": 19000,
      "Products Sold": 15000,
    },
    {
      name: "Feb",
      "Total Views": 7500,
      "Products Sold": 10000,
    },
    {
      name: "Mar",
      "Total Views": 17000,
      "Products Sold": 15000,
    },
    {
      name: "Apr",
      "Total Views": "12000",
      "Products Sold": 17500,
    },
    {
      name: "May",
      "Total Views": "16700",
      "Products Sold": 15000,
    },
    {
      name: "June",
      "Total Views": "10000",
      "Products Sold": 24000,
    },
  ];
  const pieData = [
    { name: "France", value: 4260 },
    { name: "Canada", value: 3970 },
    { name: "Japan", value: 4260 },
    { name: "Italy", value: 3000 },
  ];

  const CustomLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
      <React.Fragment>
        <text x={cx - 23} y={cy - 5}>
          <tspan
            style={{
              fontSize: "1em",
              fill: "#4D4F5C",
            }}
          >
            230,900
          </tspan>
        </text>
        <text x={cx - 16} y={cy + 15}>
          <tspan
            style={{
              fontSize: "1em",
              fill: "#4D4F5C",
            }}
          >
            Sales
          </tspan>
        </text>
      </React.Fragment>
    );
  };
  const customLegend = (value, entry) => {
    const { payload } = entry;

    return (
      <span
        className={` ${
          payload.value
            ? "text-mainColor text-sm"
            : "text-mainColor opacity-50 text-sm"
        }`}
      >
        {value}
        <span className="ml-1 text-lightGray opacity-70 text-sm">
          {payload.value === undefined ? null : payload?.payload.payload.value}
        </span>
      </span>
    );
  };

  const COLORS = ["#80E2FF", "#F49FA8", "#B5B3FB", "#FFDF94"];
  return (
    <div className="p-2 lg:p-3 w-full lg:w-1/3 ">
      <div className="bg-white px-4 pt-1 pb-10 rounded-lg">
        <div className="mt-3 flex justify-between">
          <h3 className="text-lg text-mainColor mb-6">
            {type === "graph" ? "Statistics" : "Sales Distribution"}
          </h3>
        </div>
        <div>
          {type === "graph" ? (
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart
                data={data}
                margin={{ top: 0, right: 10, left: -10, bottom: 10 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="50%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#80E2FF" stopOpacity={0.8} />
                    <stop offset="50%" stopColor="#80E2FF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#43425D", opacity: 0.5, fontSize: "0.8em" }}
                  stroke="#F5F5F5"
                />
                <YAxis
                  domain={[0, 25000]}
                  ticks={[0, 5000, 10000, 15000, 20000]}
                  tick={{ fill: "#43425D", opacity: 0.5, fontSize: "0.8em" }}
                  stroke="#F5F5F5"
                />
                <CartesianGrid strokeDasharray="0" stroke="#F5F5F5" />
                <Tooltip active={true} />
                <Area
                  type="monotone"
                  dataKey="Products Sold"
                  stroke="#8884d8"
                  dot={{ fill: "#FFF", stroke: "#8884d8", r: 4 }}
                  activeDot={{ fill: "#FFF", stroke: "#8884d8", r: 6 }}
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="Total Views"
                  stroke="#80E2FF"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                  dot={{ fill: "#FFF", stroke: "#80E2FF", r: 4 }}
                  activeDot={{ fill: "#FFF", stroke: "#80E2FF", r: 6 }}
                />
                <Legend
                  iconType="circle"
                  iconSize={12}
                  wrapperStyle={{
                    left: 10,
                    bottom: -30,
                    paddingBottom: 10,
                  }}
                  formatter={customLegend}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                  <Label content={CustomLabel} />
                </Pie>

                <Legend
                  iconType="circle"
                  iconSize={12}
                  margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
                  wrapperStyle={{
                    bottom: -20,
                    paddingBottom: 2,
                  }}
                  formatter={customLegend}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
