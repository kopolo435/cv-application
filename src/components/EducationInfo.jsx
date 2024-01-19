import Field from "./Field";
import DateField from "./DateField";
import Button from "./Button";
function EducationField({ status }) {
  return (
    <div className="educationField">
      <Field type="text" name="scholName" status={status}></Field>
      <Field type="text" name="title" status={status}></Field>
      <DateField status={status} name={"EstudioCompletado"}></DateField>
    </div>
  );
}

function EducationInfo({ status }) {
  return (
    <div className="inputContainer">
      <EducationField status={status}></EducationField>
      <Button
        content={"Añadir otro estudio"}
        btnClass={"addEducation"}
      ></Button>
    </div>
  );
}

export default EducationInfo;
