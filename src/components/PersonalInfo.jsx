import Field from "./Field";

function PersonalInfo({ status }) {
  return (
    <div className="inputContainer">
      <Field type="text" label={"Nombre"} name="nombre" status={status}></Field>
      <Field
        type="email"
        label={"Correo"}
        name="correo"
        status={status}
      ></Field>
      <Field
        type="tel"
        label={"celular"}
        name="celular"
        status={status}
      ></Field>
    </div>
  );
}

export default PersonalInfo;
