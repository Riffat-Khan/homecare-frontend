import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const settings = {
  width: 150,
  height: 150,
  value: 60,
};

export default function ArcDesign() {
  return (
    <Gauge
      {...settings}
      startAngle={-110}
      endAngle={110}
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          transform: "translate(0px, 0px)",
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#314154",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
        marginY:"-30px"
        
      })}
    />
  );
}
