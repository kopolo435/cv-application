import { useState } from "react";
import { PersonalInfo } from "./components/InputComponents";
import EducationInfo from "./components/EducationInfo";
import "./styles/main.css";
function App() {
  return (
    <>
      <div>
        <fieldset>
          <legend>Informacion Personal</legend>
          <PersonalInfo status="edit"></PersonalInfo>
        </fieldset>
        <fieldset>
          <legend>Estudios realizados</legend>
          <EducationInfo status="edit"></EducationInfo>
        </fieldset>
      </div>
    </>
  );
}

export default App;
