import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import JobExperience from "./JobExperience";
import SkillInfo from "./SkillsInfo";
import { useEffect } from "react";
import Button from "./Button";

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
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
  }

  useEffect(() => {
    if (submitting) {
      setErrors((currentErrors) => {
        if (currentErrors.size === 0) {
          setStatus("submitted");
        }
        return currentErrors; // Return the current state to ensure no changes
      });

      setSubmitting(false);
    }
  }, [submitting, setErrors, setStatus]);

  return (
    <form onSubmit={handleSubmit}>
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
      <Button type={"submitt"} content={"Guardar contenido"}></Button>
    </form>
  );
}

export default CvForm;
