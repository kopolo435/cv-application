import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import JobExperience from "./JobExperience";
import SkillInfo from "./SkillsInfo";

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

function CvForm({
  status,
  setStatus,
  educationData,
  setEducationData,
  jobData,
  setJobData,
  personalData,
  setPersonalData,
  skillData,
  setSkillData,
}) {
  const [errors, setErrors] = useState(new Map());

  return (
    <form>
      <fieldset>
        <legend>Informacion Personal</legend>
        <PersonalInfo
          status={status}
          personalData={personalData}
          setPersonalData={setPersonalData}
          errors={errors}
          setErrors={setErrors}
        ></PersonalInfo>
      </fieldset>
      <fieldset>
        <legend>Estudios realizados</legend>
        <EducationInfo
          status={status}
          educationData={educationData}
          setEducationData={setEducationData}
          errors={errors}
          setErrors={setErrors}
        ></EducationInfo>
      </fieldset>
      <fieldset>
        <legend>Experiencia laboral</legend>
        <JobExperience
          status={status}
          jobData={jobData}
          setJobData={setJobData}
          errors={errors}
          setErrors={setErrors}
        ></JobExperience>
      </fieldset>
      <fieldset>
        <legend>Habilidades</legend>
        <SkillInfo
          status={status}
          skillData={skillData}
          setSkillData={setSkillData}
        ></SkillInfo>
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
