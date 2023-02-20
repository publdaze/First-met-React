import React, { useReducer, useState } from "react";
import { Alert, Button, Input, Option, Select } from "@material-tailwind/react";

function SignUp() {
  const genderList = [
    { id: 1, contents: "여자" },
    { id: 2, contents: "남자" },
  ];
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeGender = (value?: string) => {
    if (!value) return;
    setGender(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 5000);
  };

  return (
    <form className="my-10 mx-40 space-y-5" onSubmit={handleSubmit}>
      <Input
        label="이름"
        type="text"
        value={name}
        onChange={handleChangeName}
      />
      <Select label="성별" value={gender} onChange={handleChangeGender}>
        {genderList.map((genderInfo) => (
          <Option key={genderInfo.id} value={genderInfo.contents}>
            {genderInfo.contents}
          </Option>
        ))}
      </Select>
      <Button type="submit">제출</Button>
      {isAlertVisible && (
        <Alert color="blue-gray">{`이름 : ${name} 성별 : ${gender}`}</Alert>
      )}
    </form>
  );
}

export default SignUp;
