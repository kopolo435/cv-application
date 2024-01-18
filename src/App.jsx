import { useState } from "react";
import { PersonalInfo } from "./components/InputComponents";
import "./styles/main.css";
function App() {
  return (
    <>
      <div>
        <fieldset>
          <legend>Informacion Personal</legend>
          <PersonalInfo status="edit"></PersonalInfo>
        </fieldset>
      </div>
    </>
  );
}

export default App;
