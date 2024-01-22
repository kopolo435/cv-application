import Field from "./Field";

function PersonalInfo({ status, personalData, setPersonalData }) {
  return (
    <div className="inputContainer">
      <Field
        type="text"
        label={"Nombre"}
        name="nombre"
        status={status}
        dataObj={personalData.get("0")}
        dataMap={personalData}
        dataObjProperty={"nombre"}
        handleDataMapUpdate={setPersonalData}
      ></Field>
      <Field
        type="email"
        label={"Correo"}
        name="correo"
        status={status}
        dataObj={personalData.get("0")}
        dataMap={personalData}
        dataObjProperty={"correo"}
        handleDataMapUpdate={setPersonalData}
      ></Field>
      <Field
        type="tel"
        label={"celular"}
        name="celular"
        status={status}
        dataObj={personalData.get("0")}
        dataMap={personalData}
        dataObjProperty={"celular"}
        handleDataMapUpdate={setPersonalData}
      ></Field>
    </div>
  );
}

export default PersonalInfo;
