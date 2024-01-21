import Field from "./Field";
import DateField from "./DateField";
import Button from "./Button";
import { useState } from "react";
function EducationField({
  status,
  dataObj = null,
  educationData,
  handleDataMapUpdate,
}) {
  return (
    <div className="educationField">
      <Field
        type="text"
        label={"School name"}
        name="schoolName"
        status={status}
        dataObj={dataObj}
        dataMap={educationData}
        dataObjProperty={"school"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></Field>
      <Field
        type="text"
        label={"Title"}
        name="title"
        status={status}
        dataObj={dataObj}
        dataMap={educationData}
        dataObjProperty={"title"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></Field>
      <DateField
        status={status}
        name={"EstudioCompletado"}
        dataObj={dataObj}
        dataMap={educationData}
        dataObjProperty={"date"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></DateField>
    </div>
  );
}

function EducationInfo({ status }) {
  const [educationData, setEducationData] = useState(new Map());

  function getEducationArray() {
    const array = Array.from(educationData, ([name, value]) => value);
    return array;
  }
  function addEducationField() {
    const newDataObj = {
      id: educationData.size,
      school: "",
      title: "",
      date: "",
    };
    const newMap = new Map([...educationData]);
    newMap.set(newDataObj.id, newDataObj);
    setEducationData(newMap);
  }
  const educationDataArray = getEducationArray();
  return (
    <div className="inputContainer">
      {educationData.size === 0 ? (
        <EducationField
          status={status}
          dataObj={{ id: "0", school: "", title: "", date: "" }}
          educationData={educationData}
          handleDataMapUpdate={setEducationData}
        ></EducationField>
      ) : (
        educationDataArray.map((data) => (
          <EducationField
            status={status}
            dataObj={data}
            key={data.id}
            educationData={educationData}
            handleDataMapUpdate={setEducationData}
          ></EducationField>
        ))
      )}

      {status === "edit" && (
        <Button
          content={"Añadir otro estudio"}
          btnClass={"addEducation"}
          handleClick={addEducationField}
          type={"button"}
        ></Button>
      )}
    </div>
  );
}

export default EducationInfo;
