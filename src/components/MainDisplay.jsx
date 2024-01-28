import CvForm from "./CvForm";
import { useState } from "react";
import Button from "./Button";
import Preview from "./cvDisplay/Preview";
import Header from "./Header";
import Footer from "./Footer";
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
    <>
      <Header></Header>
      <main className="editDisplay">
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
      <Footer></Footer>
    </>
  ) : (
    <>
      <Header></Header>
      <main className="submittDisplay">
        <div className="finalPreviewContainer">
          <Preview
            educationData={educationData}
            jobData={jobData}
            personalData={personalData}
            skillData={skillData}
            divClass={"finalPreview"}
          ></Preview>
        </div>
        <div className="optionContainer">
          <Button
            type={"button"}
            content={"Editar"}
            handleClick={() => setStatus("edit")}
          ></Button>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default MainDisplay;
