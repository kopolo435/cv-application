import { useState } from "react";

function formatDateToString(dateValue) {
  return dateValue ? dateValue.toISOString().split("T")[0] : "";
}

function DateInput({ name, dateValue, onInput }) {
  const dateString = formatDateToString(dateValue);
  function setDateObj(dateString) {
    const dateObj = new Date(dateString);
    onInput(dateObj);
  }

  return (
    <label>
      {name}
      <input
        type="date"
        value={dateString}
        onChange={(e) => setDateObj(e.target.value)}
        name={name}
      />
    </label>
  );
}

function DateInfo({ name, dateValue }) {
  const dateString = formatDateToString(dateValue);
  return (
    <div className="dateInfo">
      <p>{name}</p>
      <p>{dateString}</p>
    </div>
  );
}

function DateField({
  status,
  name,
  dataObj,
  dataMap,
  dataObjProperty,
  handleDataMapUpdate,
}) {
  const [dateValue, setDateValue] = useState("");
  function updateInputValue(value) {
    setDateValue(value);
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
      dateValue={dateValue}
      onInput={updateInputValue}
    ></DateInput>
  ) : (
    <DateInfo name={name} dateValue={dateValue}></DateInfo>
  );
}

export default DateField;
