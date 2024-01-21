import { useState } from "react";

function Input({ type, inputName, fieldValue, onInput, label }) {
  return (
    <label>
      {label}
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

function Field({
  type,
  label,
  name,
  status,
  dataObj,
  dataMap,
  dataObjProperty,
  handleDataMapUpdate,
}) {
  const [fieldValue, setFieldValue] = useState("");

  function updateInputValue(text) {
    setFieldValue(text);
    if (dataObj) {
      const newDataObj = { ...dataObj, [dataObjProperty]: text };
      const newMap = new Map([...dataMap]);
      newMap.set(newDataObj.id, newDataObj);
      handleDataMapUpdate(newMap);
    }
  }

  return status === "edit" ? (
    <Input
      type={type}
      label={label}
      fieldValue={fieldValue}
      inputName={dataObj ? `${name}${dataObj.id}` : name}
      value={fieldValue}
      onInput={updateInputValue}
    ></Input>
  ) : (
    <Info type={type} infoName={name} value={fieldValue}></Info>
  );
}

export default Field;
