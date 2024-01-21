import { useState } from "react";

function Input({ type, inputName, fieldValue, onInput }) {
  return (
    <label>
      {inputName}
      <input
        type={type}
        value={fieldValue}
        name={inputName}
        onChange={(e) => onInput(e.target.value)}
      />
    </label>
  );
}

function Info({ type, infoName, value }) {
  return (
    <div>
      <p>{infoName}</p>
      <p>{value}</p>
    </div>
  );
}

function Field({ type, name, status }) {
  const [fieldValue, setFieldValue] = useState("");
  return status === "edit" ? (
    <Input
      type={type}
      fieldValue={fieldValue}
      inputName={name}
      value={fieldValue}
      onInput={setFieldValue}
    ></Input>
  ) : (
    <Info type={type} infoName={name} value={fieldValue}></Info>
  );
}

export default Field;
