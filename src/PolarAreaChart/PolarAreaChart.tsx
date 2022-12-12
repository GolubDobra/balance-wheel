import React, { useRef, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
} from "chart.js";

import "./PolarAreaChart.css";
import { DATA, NUM_OF_VALUES, RANGE_ID, START_VALUE, TITLES_ID } from "./constants";

export const PolarAreaChart = () => {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

  const myChart = useRef<
    ChartJSOrUndefined<"polarArea", number[], string> | undefined
  >();

  const [rangeValues, setRangeValues] = useState<Array<number>>(
    new Array(NUM_OF_VALUES).fill(START_VALUE)
  );

  const rangeSlide = (value: string, rangeValueId: string, index: number) => {
    const rangeValue = document.getElementById(rangeValueId);
    if (rangeValue) {
      setRangeValues(() => {
        rangeValues[index] = parseInt(value);
        return rangeValues;
      });

      rangeValue.innerHTML = value;
    }

    if (myChart) {
      const chart = myChart.current;
      if (chart) {
        chart.data.datasets.forEach((dataset) => {
          dataset.data = rangeValues;
        });
        chart.update();
      }
    }
  };

 

  return (
    <>
      <PolarArea ref={myChart} data={DATA} />
      <div className="PolarAreaChart">
        {RANGE_ID.map((id, idx) => (
          <div key={id} className="RangeWrapper">
            <span className="rangeValue">{TITLES_ID[idx]}:{' '}</span>
            <span id={`${id}-value`} className="rangeValue">
              {START_VALUE}
            </span>
            <input
              list={id + "-list"}
              id={id}
              type="range"
              min="0"
              max={START_VALUE}
              step="1"
              onChange={(e) => rangeSlide(e.target.value, `${id}-value`, idx)}
            />
            <datalist id={id + "-list"}>
              {new Array(NUM_OF_VALUES).fill(0).map((_, index) => (
                <option key={index} value={index + 1} label={`${index + 1}`}>
                  {index + 1}
                </option>
              ))}
            </datalist>
          </div>
        ))}
      </div>
    </>
  );
};
