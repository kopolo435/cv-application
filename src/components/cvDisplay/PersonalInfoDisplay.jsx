function PersonalInfoDisplay({ data }) {
  const person = data.get("0");
  return (
    <>
      {person.nombre !== "" ? (
        <p className="personName">{person.nombre}</p>
      ) : (
        <p className="personName">Ingrese un nombre</p>
      )}
      {person.correo !== "" ? <p>{person.correo}</p> : <p>Ingrese un correo</p>}
      {person.celular !== "" ? (
        <p>{person.celular}</p>
      ) : (
        <p>Ingrese un telefono</p>
      )}
    </>
  );
}

export default PersonalInfoDisplay;
