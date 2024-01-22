import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import JobExperience from "./JobExperience";

function getJobInitialMap() {
  const JobInitialMap = new Map();
  JobInitialMap.set("0", {
    id: "0",
    company: "",
    jobTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  return JobInitialMap;
}

function getEducationInitialMap() {
  const educationInitialMap = new Map();
  educationInitialMap.set("0", { id: "0", school: "", title: "", date: "" });
  return educationInitialMap;
}

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
  const [educationData, setEducationData] = useState(getEducationInitialMap());
  const [jobData, setJobData] = useState(getJobInitialMap());

  return (
    <form>
      <fieldset>
        <legend>Informacion Personal</legend>
        <PersonalInfo status={status}></PersonalInfo>
      </fieldset>
      <fieldset>
        <legend>Estudios realizados</legend>
        <EducationInfo
          status={status}
          educationData={educationData}
          setEducationData={setEducationData}
        ></EducationInfo>
      </fieldset>
      <fieldset>
        <legend>Experiencia laboral</legend>
        <JobExperience
          status={status}
          jobData={jobData}
          setJobData={setJobData}
        ></JobExperience>
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
