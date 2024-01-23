import { useState } from "react";

function Input({ type, inputName, fieldValue, onInput, label, errorValue }) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          value={fieldValue}
          name={inputName}
          onChange={(e) => onInput(e.target.value)}
        />
      </label>
      <p>{errorValue}</p>
    </div>
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

function validateInput(
  text,
  inputValidation,
  errors,
  setErrors,
  setErrorValue,
  dataObj
) {
  const errorText = inputValidation(text);
  const tempErrorsMap = new Map([...errors]);
  const errorKey = dataObj ? dataObj.id : name;
  if (errorText) {
    setErrorValue(errorText);
    tempErrorsMap.set(errorKey, errorText);
    setErrors(tempErrorsMap);
  } else {
    setErrorValue("");
    if (errors.has(errorKey)) {
      tempErrorsMap.set(errorKey, "");
      setErrors(tempErrorsMap);
    }
  }
}

function Field({
  type,
  label,
  name,
  index,
  status,
  dataObj,
  dataMap,
  dataObjProperty,
  handleDataMapUpdate,
  errors,
  setErrors,
  inputValidation,
}) {
  const [fieldValue, setFieldValue] = useState("");
  const [errorValue, setErrorValue] = useState("");

  function updateInputValue(text) {
    setFieldValue(text);

    validateInput(
      text,
      inputValidation,
      errors,
      setErrors,
      setErrorValue,
      dataObj
    );

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
      inputName={index > -1 ? `${name}[${index}]` : name}
      value={fieldValue}
      onInput={updateInputValue}
      errorValue={errorValue}
    ></Input>
  ) : (
    <Info type={type} infoName={name} value={fieldValue}></Info>
  );
}

export default Field;
