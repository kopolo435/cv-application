function Input({ type, inputName }) {
  return (
    <label>
      {inputName}
      <input type={type} name={inputName} />
    </label>
  );
}

function Info({ type, infoName }) {
  return (
    <div>
      <p>{infoName}</p>
      <p>Hola</p>
    </div>
  );
}

function Field({ type, name, status }) {
  return status === "edit" ? (
    <Input type={type} inputName={name}></Input>
  ) : (
    <Info type={type} infoName={name}></Info>
  );
}

export default Field;
