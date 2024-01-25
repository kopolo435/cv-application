function PersonalInfoDisplay({ data }) {
  const person = data.get("0");
  return (
    <div>
      <p>{person.nombre}</p>
      <p>{person.correo}</p>
      <p>{person.celular}</p>
    </div>
  );
}

export default PersonalInfoDisplay;
