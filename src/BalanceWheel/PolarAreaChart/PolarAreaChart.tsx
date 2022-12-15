import React, { FunctionComponent, RefObject, useEffect } from "react";
import { PolarArea } from "react-chartjs-2";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
} from "chart.js";

import "./PolarAreaChart.css";

type Props = {
  chartRef: RefObject<ChartJSOrUndefined<"polarArea", number[], string>>;
  titles: Array<string>;
  rangeValues: { [key: string]: number };
};

export const PolarAreaChart: FunctionComponent<Props> = ({
  chartRef,
  titles,
  rangeValues,
}) => {
  const DATA = {
    labels: titles,
    datasets: [
      {
        label: "Очки",
        data: Object.values(rangeValues),
        backgroundColor: [
          "rgba(255, 99, 132, .5)",
          "rgba(75, 192, 192, .5)",
          "rgba(255, 205, 86, .5)",
          "rgba(201, 203, 207, .5)",
          "rgba(54, 162, 235, .5)",
          "rgba(255, 20, 86, .5)",
          "rgba(201, 203, 27, .5)",
          "rgba(14, 16, 235, .5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

  useEffect(() => {
    if (chartRef) {
      const chart = chartRef.current;
      if (chart) {
        chart.data.datasets.forEach((dataset) => {
          dataset.data = Object.values(rangeValues);
        });
        chart.update();
      }
    }
  }, [rangeValues]);

  return <PolarArea className="PolarAreaChart" ref={chartRef} data={DATA} />;
};
