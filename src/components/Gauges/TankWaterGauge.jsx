import React, { useState, useEffect } from "react";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";
// import { useBreakpoints } from "@theme-ui/match-media";
const TankWaterGauge = ({ level }) => {
  const calculateDimensions = () => {
    const screenWidth = window.innerWidth;
    let radius;

    if (screenWidth < 300) {
      radius = 60;
    } else if (screenWidth < 568) {
      radius = 70;
    } else if (screenWidth < 1024) {
      radius = 80;
    } else if (screenWidth < 1280) {
      radius = 90;
    } else {
      radius = 100; // Fallback value for larger screens
    }

    return radius * 2; // Return the calculated diameter
  };
  const [width, setWidth] = useState(calculateDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWidth(calculateDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const radius = 80;
  const startColor = "#e72323"; // cornflowerblue
  const endColor = "#46d317"; // crimson
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(level / 100);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  return (
    <LiquidFillGauge
      width={width}
      height={width}
      value={level}
      percent="%"
      textSize={1}
      textOffsetX={0}
      textOffsetY={0}
      textRenderer={({ value, width, height, textSize, percent }) => {
        value = Math.round(value);
        const radius = Math.min(height / 2, width / 2);
        const textPixels = (textSize * radius) / 2;
        const valueStyle = {
          fontSize: textPixels,
        };
        const percentStyle = {
          fontSize: textPixels * 0.6,
        };

        return (
          <tspan>
            <tspan className="value" style={valueStyle}>
              {value}
            </tspan>
            <tspan style={percentStyle}>{percent}</tspan>
          </tspan>
        );
      }}
      riseAnimation
      waveAnimation
      waveFrequency={2}
      waveAmplitude={1}
      gradient
      gradientStops={gradientStops}
      circleStyle={{
        fill: fillColor,
      }}
      waveStyle={{
        fill: fillColor,
      }}
      textStyle={{
        fill: color("#444").toString(),
        fontFamily: "Arial",
      }}
      waveTextStyle={{
        fill: color("#fff").toString(),
        fontFamily: "Arial",
      }}
    />
  );
};

export default TankWaterGauge;
