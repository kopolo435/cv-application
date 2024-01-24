import CvForm from "./CvForm";
import { useState } from "react";

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

function MainDisplay() {
  const [status, setStatus] = useState("");
  const [educationData, setEducationData] = useState(new Map());
  const [jobData, setJobData] = useState(new Map());
  const [personalData, setPersonalData] = useState(getPersonalInfoMap());
  const [skillData, setSkillData] = useState(new Map());
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
