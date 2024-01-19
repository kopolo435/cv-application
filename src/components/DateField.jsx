function DateInput({ name }) {
  return (
    <label>
      {name}
      <input type="date" name={name} />
    </label>
  );
}

function DateInfo({ name }) {
  return (
    <div className="dateInfo">
      <p>{name}</p>
      <p>Fecha</p>
    </div>
  );
}

function DateField({ status, name }) {
  return status === "edit" ? (
    <DateInput name={name}></DateInput>
  ) : (
    <DateInfo name={name}></DateInfo>
  );
}

export default DateField;
