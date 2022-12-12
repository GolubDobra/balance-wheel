import React, { useEffect } from "react";
import Chart from "chart.js/auto";

import 'chart.js/auto';

import { START_VALUE, RANGE_ID } from "./constants";

export const useSetChart = (
  setPolarArea: React.Dispatch<
    React.SetStateAction<Chart<"polarArea", number[], string> | undefined>
  >,
  rangeValues: Array<number>,
  polarArea: Chart<"polarArea", number[], string> | undefined,
  TITLE_ID: Array<string>
) => {
  useEffect(() => {
    RANGE_ID.forEach((rangeValueId) => {
      const rangeValueElm = document.getElementById(
        `${rangeValueId}`
      ) as HTMLInputElement;
      rangeValueElm.value = String(START_VALUE);
    });

    const CHART = document.getElementById("polarArea") as HTMLCanvasElement;

    setPolarArea(
      new Chart(CHART, {
        type: "polarArea",
        data: {
          labels: TITLE_ID,
          datasets: [
            {
              label: "Очки",
              data: rangeValues,
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
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              onClick: (e) => e.native?.stopPropagation(),
            },
            title: {
              display: true,
              text: "Balance Wheel",
            },
          },
          scales: {
            r: {
              max: 10,
            },
          },
        },
      })
    );

    return () => {
      if (polarArea) {
        polarArea.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
