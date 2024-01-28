import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import JobExperience from "./JobExperience";
import SkillInfo from "./SkillsInfo";
import { useEffect } from "react";
import Button from "./Button";
import "../../styles/inputs.css";

function SubmittButton({ handleClick, btnClass, content, type, form }) {
  return (
    <button type={type} className={btnClass} onClick={handleClick} form={form}>
      {content}
    </button>
  );
}

function CvForm({
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
  const [submitting, setSubmitting] = useState(false);
  const status = "edit";

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
  }

  useEffect(() => {
    if (submitting) {
      let currentErrorsSize;

      setErrors((currentErrors) => {
        currentErrorsSize = currentErrors.size;
        return currentErrors; // Return the current state to ensure no changes
      });

      setTimeout(() => {
        if (currentErrorsSize === 0) {
          setStatus("submitted");
        }
      }, 0);

      setSubmitting(false);
    }
  }, [submitting, setErrors, setStatus]);

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} id="cvForm">
        <fieldset>
          <legend>Informacion Personal</legend>
          <PersonalInfo
            status={status}
            personalData={personalData}
            setPersonalData={setPersonalData}
            errors={errors}
            setErrors={setErrors}
            submitting={submitting}
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
            submitting={submitting}
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
            submitting={submitting}
          ></JobExperience>
        </fieldset>
        <fieldset>
          <legend>Habilidades</legend>
          <SkillInfo
            status={status}
            skillData={skillData}
            setSkillData={setSkillData}
            errors={errors}
            setErrors={setErrors}
            submitting={submitting}
          ></SkillInfo>
        </fieldset>
      </form>
      <SubmittButton
        type={"submitt"}
        content={"Guardar contenido"}
        form={"cvForm"}
      ></SubmittButton>
    </div>
  );
}

export default CvForm;
