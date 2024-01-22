import CvForm from "./CvForm";
import { useState } from "react";
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

function getPersonalInfoMap() {
  const personalInfoInitialMap = new Map();
  personalInfoInitialMap.set("0", {
    id: "0",
    nombre: "",
    correo: "",
    telefono: "",
  });
  return personalInfoInitialMap;
}

function getSkillInfoMap() {
  const InitialMap = new Map();
  InitialMap.set("0", {
    id: "0",
    skill: "",
  });
  return InitialMap;
}

function MainDisplay() {
  const [status, setStatus] = useState("");
  const [educationData, setEducationData] = useState(getEducationInitialMap());
  const [jobData, setJobData] = useState(getJobInitialMap());
  const [personalData, setPersonalData] = useState(getPersonalInfoMap);
  const [skillData, setSkillData] = useState(getSkillInfoMap());
  return (
    <main>
      <CvForm
        status={status}
        setStatus={setStatus}
        educationData={educationData}
        setEducationData={setEducationData}
        jobData={jobData}
        setJobData={setJobData}
        personalData={personalData}
        setPersonalData={setPersonalData}
        skillData={skillData}
        setSkillData={setSkillData}
      ></CvForm>
    </main>
  );
}

export default MainDisplay;
