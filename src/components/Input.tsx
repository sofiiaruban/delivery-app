import { ChangeEvent } from "react";

interface InputProp {
  inputName: string;
  inputType: string;
  setUserFormData: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProp> = ({
  inputName,
  inputType,
  setUserFormData,
}) => {
  return (
    <>
      <label htmlFor={inputName}>{inputName}:</label>
      <input
        type={inputType}
        name={inputName}
        placeholder={`Enter your name ${inputName}`}
        onChange={setUserFormData}
      />
    </>
  );
};
export default Input;
