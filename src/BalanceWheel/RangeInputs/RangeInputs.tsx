import React, { FunctionComponent } from "react";

import "./RangeInputs.css";

type Props = {
  titles: Array<string>;
  rangeValues: { [key: string]: number };
  max: number;
  min: number;
  onChange?: (value: string, labelId: string) => void;
  onInput?: (value: string, labelId: string) => void;
};

export const RangeInputs: FunctionComponent<Props> = ({
  titles,
  rangeValues,
  max,
  min,
  onChange,
  onInput,
}) => {
  return (
    <div className="RangeInputs">
      {Object.keys(rangeValues).map((id, idx) => (
        <div key={id} className="RangeWrapper">
          <span className="rangeValue">{titles[idx]}: </span>
          <span id={`${id}-value`} className="RangeValue">
            {rangeValues[id]}
          </span>
          <input
            list={id + "-list"}
            id={id}
            className="Input"
            type="range"
            min={min}
            max={max}
            step="1"
            onChange={(e) => {
              if (onChange) {
                const target = e.target as HTMLInputElement;
                onChange(target.value, id);
              }
            }}
            onInput={(e) => {
              if (onInput) {
                const target = e.target as HTMLInputElement;
                onInput(target.value, id);
              }
            }}
          />
          <datalist id={id + "-list"}>
            {Object.keys(rangeValues).map((_, index) => (
              <option key={index} value={index + 1} label={`${index + 1}`}>
                {index + 1}
              </option>
            ))}
          </datalist>
        </div>
      ))}
    </div>
  );
};
