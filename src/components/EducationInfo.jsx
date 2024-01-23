import Field from "./Field";
import DateField from "./DateField";
import Button from "./Button";
import { useState } from "react";
import { requiredTestField } from "../javascript/inputValidation";
function EducationField({
  status,
  index,
  dataObj = null,
  educationData,
  handleDataMapUpdate,
  errors,
  setErrors,
}) {
  function deleteEducationField() {
    const newMap = new Map([...educationData]);
    newMap.delete(dataObj.id);
    handleDataMapUpdate(newMap);
  }

  return (
    <div className="educationField">
      <Field
        type="text"
        label={"School name"}
        name="schoolName"
        index={index}
        status={status}
        dataObj={dataObj}
        dataMap={educationData}
        dataObjProperty={"school"}
        handleDataMapUpdate={handleDataMapUpdate}
        errors={errors}
        setErrors={setErrors}
        inputValidation={requiredTestField}
      ></Field>
      <Field
        type="text"
        label={"Title"}
        name="title"
        index={index}
        status={status}
        dataObj={dataObj}
        dataMap={educationData}
        dataObjProperty={"title"}
        handleDataMapUpdate={handleDataMapUpdate}
        errors={errors}
        setErrors={setErrors}
        inputValidation={requiredTestField}
      ></Field>
      <DateField
        status={status}
        name={"EstudioCompletado"}
        index={index}
        dataObj={dataObj}
        dataMap={educationData}
        dataObjProperty={"date"}
        handleDataMapUpdate={handleDataMapUpdate}
        errors={errors}
        setErrors={setErrors}
        inputValidation={requiredTestField}
      ></DateField>
      {status === "edit" && (
        <Button
          handleClick={deleteEducationField}
          type={"button"}
          content={"Borrar"}
        ></Button>
      )}
    </div>
  );
}

function EducationInfo({
  status,
  educationData,
  setEducationData,
  errors,
  setErrors,
}) {
  function getEducationArray() {
    const array = Array.from(educationData, ([name, value]) => value);
    return array;
  }
  function addEducationField() {
    const newDataObj = {
      id: `${crypto.randomUUID()}`,
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
      {educationDataArray.map((data, index) => (
        <EducationField
          status={status}
          index={index}
          dataObj={data}
          key={data.id}
          educationData={educationData}
          handleDataMapUpdate={setEducationData}
          errors={errors}
          setErrors={setErrors}
        ></EducationField>
      ))}

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
