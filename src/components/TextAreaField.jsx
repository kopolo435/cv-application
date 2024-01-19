function TextAreaInfo({ name }) {
  return (
    <div className="textArea">
      <p>{name}</p>
      <p>Tuve estas responsabilidades</p>
    </div>
  );
}

function TextAreaInput({ name }) {
  return (
    <label>
      {name}
      <textarea name={name} cols="30" rows="5"></textarea>
    </label>
  );
}

function TextAreaField({ status, name }) {
  return status === "edit" ? (
    <TextAreaInput name={name}></TextAreaInput>
  ) : (
    <TextAreaInfo name={name}></TextAreaInfo>
  );
}

export default TextAreaField;
