import Field from "./Field";
import {
  nameInputTest,
  emailInputTest,
  cellphoneTest,
} from "../javascript/inputValidation";
function PersonalInfo({
  status,
  personalData,
  setPersonalData,
  errors,
  setErrors,
}) {
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
        errors={errors}
        setErrors={setErrors}
        inputValidation={nameInputTest}
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
        errors={errors}
        setErrors={setErrors}
        inputValidation={emailInputTest}
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
        errors={errors}
        setErrors={setErrors}
        inputValidation={cellphoneTest}
      ></Field>
    </div>
  );
}

export default PersonalInfo;
