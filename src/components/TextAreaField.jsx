import { useState } from "react";

function TextAreaInfo({ name, textValue }) {
  return (
    <div className="textArea">
      <p>Funciones Realizadas:</p>
      <p>{textValue}</p>
    </div>
  );
}

function TextAreaInput({ name, textValue, onInput }) {
  return (
    <label>
      {name}
      <textarea
        name={name}
        cols="30"
        rows="5"
        value={textValue}
        onChange={(e) => onInput(e.target.value)}
      ></textarea>
    </label>
  );
}

function TextAreaField({ status, name }) {
  const [textValue, setTextValue] = useState("");
  return status === "edit" ? (
    <TextAreaInput
      name={name}
      textValue={textValue}
      onInput={setTextValue}
    ></TextAreaInput>
  ) : (
    <TextAreaInfo name={name} textValue={textValue}></TextAreaInfo>
  );
}

export default TextAreaField;
