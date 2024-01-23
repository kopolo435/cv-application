import { useState } from "react";

function formatDateToString(dateValue) {
  return dateValue ? dateValue.toISOString().split("T")[0] : "";
}

function DateInput({ name, index, dateValue, onInput }) {
  const dateString = formatDateToString(dateValue);

  function setDateObj(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    onInput(dateObj);
  }

  return (
    <label>
      {name}
      <input
        type="date"
        value={dateString}
        onChange={(e) => setDateObj(e.target.value)}
        name={index > -1 ? `${name}[${index}]` : name}
        min={"1950-01-01"}
        max={"2025-01-01"}
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
  index,
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
      index={index}
      dateValue={dateValue}
      onInput={updateInputValue}
    ></DateInput>
  ) : (
    <DateInfo name={name} dateValue={dateValue}></DateInfo>
  );
}

export default DateField;
