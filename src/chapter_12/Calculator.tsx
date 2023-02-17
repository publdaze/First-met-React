import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const BoilingVerdict = ({ celsius }: { celsius: number }) => {
  if (celsius >= 100) {
    return <p className="text-red-600">물이 끓습니다.</p>;
  }
  return <p className="text-blue-600">물이 끓지 않습니다.</p>;
};

const toCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (
  temperature: string,
  convert: (fahrenheit: number) => number
) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

const Calculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature: string) => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature: string) => {
    setTemperature(temperature);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div className="m-10 space-y-8">
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

export default Calculator;
