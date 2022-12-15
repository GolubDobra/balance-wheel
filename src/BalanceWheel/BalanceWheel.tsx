import React, { createRef, useState } from "react";

import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
} from "chart.js";

import { PolarAreaChart } from "./PolarAreaChart/PolarAreaChart";
import { RangeInputs } from "./RangeInputs";

import "./BalanceWheel.css";

const TITLES_NAME: Array<string> = [
  "Друзья",
  "Здоровье",
  "Работа",
  "Финансы",
  "Семья",
  "Отдых",
  "Личностный рост",
  "Творчество",
];

const START_VALUES: { [key: string]: number } = {
  "friends-range": 10,
  "health-range": 10,
  "work-range": 10,
  "money-range": 10,
  "family-range": 10,
  "rest-range": 10,
  "personal-growth-range": 10,
  "creation-range": 10,
};

export const BalanceWheel = () => {
  const [rangeValues, setRangeValues] = useState<{ [key: string]: number }>(
    START_VALUES
  );

  const chartRef = createRef<
    ChartJSOrUndefined<"polarArea", number[], string> | undefined
  >();

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

  const rangeSlide = (value: string, index: string) => {
    setRangeValues(() => {
      const newRangeValues = { ...rangeValues };
      newRangeValues[index] = parseInt(value);
      return newRangeValues;
    });
  };

  return (
    <div className="BalanceWheel">
      <PolarAreaChart
        chartRef={chartRef}
        titles={TITLES_NAME}
        rangeValues={rangeValues}
      />
      <RangeInputs
        titles={TITLES_NAME}
        rangeValues={rangeValues}
        max={10}
        min={0}
        onInput={rangeSlide}
      />
    </div>
  );
};
