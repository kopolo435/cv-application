import { useState, useEffect } from "react";

function formatDateToString(dateValue) {
  return dateValue ? dateValue.toISOString().split("T")[0] : "";
}

function validateDate(
  dateObj,
  inputValidation,
  errors,
  setErrors,
  setErrorValue,
  dataObj,
  name
) {
  const errorText = inputValidation(dateObj);
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

function DateInput({ name, label, index, dateValue, onInput, errorValue }) {
  const dateString = formatDateToString(dateValue);

  function setDateObj(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    onInput(dateObj);
  }

  return (
    <div className="dateInput">
      <label>
        {label}
        <input
          type="date"
          value={dateString}
          onChange={(e) => setDateObj(e.target.value)}
          name={index > -1 ? `${name}[${index}]` : name}
          min={"1950-01-01"}
          max={"2025-01-01"}
        />
      </label>
      <p className="errorText">{errorValue}</p>
    </div>
  );
}

function DateInfo({ name, label, dateValue }) {
  const dateString = formatDateToString(dateValue);
  return (
    <div className="dateInfo">
      <p>{label}</p>
      <p>{dateString}</p>
    </div>
  );
}

function DateField({
  status,
  name,
  label,
  index,
  dataObj,
  dataMap,
  dataObjProperty,
  handleDataMapUpdate,
  errors,
  setErrors,
  inputValidation,
  submitting,
}) {
  const [dateValue, setDateValue] = useState(
    dataObj ? dataObj[dataObjProperty] : ""
  );
  const [errorValue, setErrorValue] = useState("");

  useEffect(() => {
    // Validate input when submitting changes
    if (submitting) {
      validateDate(
        dateValue,
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
    dateValue,
    inputValidation,
    errors,
    setErrors,
    setErrorValue,
    dataObj,
    name,
  ]);

  function updateInputValue(value) {
    setDateValue(value);

    if (inputValidation) {
      validateDate(
        value,
        inputValidation,
        errors,
        setErrors,
        setErrorValue,
        dataObj,
        name
      );
    }

    if (dataObj) {
      const newDataObj = { ...dataObj, [dataObjProperty]: value };
      const newMap = new Map([...dataMap]);
      newMap.set(newDataObj.id, newDataObj);
      handleDataMapUpdate(newMap);
    }
  }
  return status === "edit" ? (
    <DateInput
      name={name}
      label={label}
      index={index}
      dateValue={dateValue}
      onInput={updateInputValue}
      errorValue={errorValue}
    ></DateInput>
  ) : (
    <DateInfo name={name} label={label} dateValue={dateValue}></DateInfo>
  );
}

export default DateField;
