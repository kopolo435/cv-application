import { useState } from "react";
import { PersonalInfo } from "./InputComponents";
import EducationInfo from "./EducationInfo";
import JobExperience from "./JobExperience";

function StatusButton({ handleClick, value, btnClass, content }) {
  return (
    <button
      type="button"
      onClick={() => handleClick(value)}
      className={btnClass}
    >
      {content}
    </button>
  );
}
function CvForm() {
  const [status, setStatus] = useState("");
  return (
    <form>
      <fieldset>
        <legend>Informacion Personal</legend>
        <PersonalInfo status={status}></PersonalInfo>
      </fieldset>
      <fieldset>
        <legend>Estudios realizados</legend>
        <EducationInfo status={status}></EducationInfo>
      </fieldset>
      <fieldset>
        <legend>Experiencia laboral</legend>
        <JobExperience status={status}></JobExperience>
      </fieldset>
      <StatusButton
        btnClass={"secondaryBtn"}
        handleClick={setStatus}
        value={"edit"}
        content={"Editar contenido"}
      ></StatusButton>
      <StatusButton
        btnClass={"secondaryBtn"}
        handleClick={setStatus}
        value={"submit"}
        content={"Guardar contenido"}
      ></StatusButton>
    </form>
  );
}

export default CvForm;
