import Field from "./Field";

function PersonalInfo({ status }) {
  return (
    <div className="inputContainer">
      <Field type="text" name="nombre" status="edit"></Field>
      <Field type="email" name="correo" status="edit"></Field>
      <Field type="tel" name="celular" status="edit"></Field>
    </div>
  );
}

export { PersonalInfo };
