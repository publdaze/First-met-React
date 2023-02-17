import { Input } from "@material-tailwind/react";

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}: {
  temperature: string;
  scale: keyof typeof scaleNames;
  onTemperatureChange: (temperature: string) => void;
}) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onTemperatureChange(event.target.value);
  };

  return (
    <Input
      variant="static"
      label={scaleNames[scale]}
      placeholder="온도를 입력해주세요"
      value={temperature}
      onChange={handleChange}
    />
  );
}

export default TemperatureInput;
