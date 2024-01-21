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

function DateField({ status, name }) {
  const [dateValue, setDateValue] = useState("");
  return status === "edit" ? (
    <DateInput
      name={name}
      dateValue={dateValue}
      onInput={setDateValue}
    ></DateInput>
  ) : (
    <DateInfo name={name} dateValue={dateValue}></DateInfo>
  );
}

export default DateField;
