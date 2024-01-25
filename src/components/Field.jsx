import { useState } from "react";
import { useEffect } from "react";

function Input({ type, inputName, fieldValue, onInput, label, errorValue }) {
  return (
    <div className="inputContainer">
      <label>
        {label}
        <input
          type={type}
          value={fieldValue}
          name={inputName}
          onChange={(e) => onInput(e.target.value)}
        />
      </label>
      <p className="errorText">{errorValue}</p>
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
  dataObj,
  name
) {
  const errorText = inputValidation(text);
  const tempErrorsMap = new Map([...errors]);
  const errorKey = dataObj.id === "0" ? name : dataObj.id;
  if (errorText) {
    setErrorValue(errorText);
    setErrors((prevErrors) => {
      const tempMap = new Map([...prevErrors]);
      tempMap.set(errorKey, errorText);
      return tempMap;
    });
  } else {
    setErrorValue("");
    if (errors.has(errorKey)) {
      tempErrorsMap.delete(errorKey);
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
  submitting,
}) {
  const [fieldValue, setFieldValue] = useState(
    dataObj ? dataObj[dataObjProperty] : ""
  );
  const [errorValue, setErrorValue] = useState("");

  useEffect(() => {
    // Validate input when submitting changes
    if (submitting) {
      validateInput(
        fieldValue,
        inputValidation,
        errors,
        setErrors,
        setErrorValue,
        dataObj,
        name
      );
    }
  }, [
    submitting,
    fieldValue,
    inputValidation,
    errors,
    setErrors,
    setErrorValue,
    dataObj,
    name,
  ]);

  function updateInputValue(text) {
    setFieldValue(text);
    if (inputValidation) {
      validateInput(
        text,
        inputValidation,
        errors,
        setErrors,
        setErrorValue,
        dataObj,
        name
      );
    }

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
