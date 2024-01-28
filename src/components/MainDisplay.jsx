import CvForm from "./CvForm";
import { useState } from "react";
import Button from "./Button";
import Preview from "./cvDisplay/Preview";
import "../../styles/main.css";
import "../../styles/preview.css";

function getPersonalInfoMap() {
  const personalInfoInitialMap = new Map();
  personalInfoInitialMap.set("0", {
    id: "0",
    nombre: "",
    correo: "",
    celular: "",
  });
  return personalInfoInitialMap;
}

function MainDisplay() {
  const [status, setStatus] = useState("edit");
  const [educationData, setEducationData] = useState(new Map());
  const [jobData, setJobData] = useState(new Map());
  const [personalData, setPersonalData] = useState(getPersonalInfoMap());
  const [skillData, setSkillData] = useState(new Map());
  return status === "edit" ? (
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
      <Preview
        educationData={educationData}
        jobData={jobData}
        personalData={personalData}
        skillData={skillData}
      ></Preview>
    </main>
  ) : (
    <main>
      <Preview
        educationData={educationData}
        jobData={jobData}
        personalData={personalData}
        skillData={skillData}
      ></Preview>
      <Button
        type={"button"}
        content={"Editar"}
        handleClick={() => setStatus("edit")}
      ></Button>
    </main>
  );
}

export default MainDisplay;
