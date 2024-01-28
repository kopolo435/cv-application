function PersonalInfoDisplay({ data }) {
  const person = data.get("0");
  return (
    <>
      {person.nombre !== "" ? <p>{person.nombre}</p> : <p>Ingrese un nombre</p>}
      {person.correo !== "" ? <p>{person.correo}</p> : <p>Ingrese un correo</p>}
      {person.celular !== "" ? (
        <p>{person.celular}</p>
      ) : (
        <p>Ingrese el numero de telefono</p>
      )}
    </>
  );
}

export default PersonalInfoDisplay;
