import { useState } from "react";

function TextAreaInfo({ name, textValue }) {
  return (
    <div className="textArea">
      <p>Funciones Realizadas:</p>
      <p>{textValue}</p>
    </div>
  );
}

function TextAreaInput({ name, label, index, textValue, onInput }) {
  return (
    <div className="textAreaInput">
      <label>
        {label}
        <textarea
          name={index > -1 ? `${name}[${index}]` : name}
          cols="30"
          rows="5"
          value={textValue}
          onChange={(e) => onInput(e.target.value)}
        ></textarea>
      </label>
    </div>
  );
}

function TextAreaField({
  status,
  name,
  label,
  index,
  dataObj,
  dataMap,
  dataObjProperty,
  handleDataMapUpdate,
}) {
  const [textValue, setTextValue] = useState(
    dataObj ? dataObj[dataObjProperty] : ""
  );
  function updateInputValue(value) {
    setTextValue(value);
    if (dataObj) {
      const newDataObj = { ...dataObj, [dataObjProperty]: value };
      const newMap = new Map([...dataMap]);
      newMap.set(newDataObj.id, newDataObj);
      handleDataMapUpdate(newMap);
    }
  }
  return status === "edit" ? (
    <TextAreaInput
      name={name}
      label={label}
      index={index}
      textValue={textValue}
      onInput={updateInputValue}
    ></TextAreaInput>
  ) : (
    <TextAreaInfo
      name={name}
      label={label}
      textValue={textValue}
    ></TextAreaInfo>
  );
}

export default TextAreaField;
