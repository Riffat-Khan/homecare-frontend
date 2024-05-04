import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  xAxis: [{ label: "issue (count)" }],
  width: 500,
  height: 400,
};
const dataset = [
  { issueCount: 21, month: "Jan" },
  { issueCount: 28, month: "Feb" },
  { issueCount: 41, month: "Mar" },
  { issueCount: 73, month: "Apr" },
  { issueCount: 99, month: "May" },
  { issueCount: 144, month: "June" },
  { issueCount: 319, month: "July" },
  { issueCount: 249, month: "Aug" },
  { issueCount: 131, month: "Sept" },
  { issueCount: 55, month: "Oct" },
  { issueCount: 48, month: "Nov" },
  { issueCount: 25, month: "Dec" },
];

const valueFormatter = (value) => `${value}`;

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[{ dataKey: "issueCount", label: "ISSUES", valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
