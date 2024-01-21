import Field from "./Field";

function PersonalInfo({ status }) {
  return (
    <div className="inputContainer">
      <Field type="text" name="nombre" status={status}></Field>
      <Field type="email" name="correo" status={status}></Field>
      <Field type="tel" name="celular" status={status}></Field>
    </div>
  );
}

export { PersonalInfo };
