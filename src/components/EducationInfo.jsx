import Field from "./Field";
import DateField from "./DateField";
import Button from "./Button";
import { useState } from "react";
import {
  requiredTestField,
  dateInputTest,
} from "../javascript/inputValidation";
function EducationField({
  status,
  index,
  dataObj = null,
  educationData,
  handleDataMapUpdate,
  errors,
  setErrors,
  submitting,
}) {
  function deleteEducationField() {
    const newMap = new Map([...educationData]);
    const newErrors = new Map([...errors]);
    newMap.delete(dataObj.id);
    newErrors.delete(dataObj.id);
    handleDataMapUpdate(newMap);
    setErrors(newErrors);
  }

  return (
    <div className="educationField">
      <Field
        type="text"
        label={"Lugar de estudio"}
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
        submitting={submitting}
      ></Field>
      <Field
        type="text"
        label={"Titulo"}
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
        submitting={submitting}
      ></Field>
      <DateField
        status={status}
        name={"EstudioCompletado"}
        label={"Fecha de finalizacion"}
        index={index}
        dataObj={dataObj}
        dataMap={educationData}
        dataObjProperty={"date"}
        handleDataMapUpdate={handleDataMapUpdate}
        errors={errors}
        setErrors={setErrors}
        inputValidation={dateInputTest}
        submitting={submitting}
      ></DateField>
      {status === "edit" && (
        <Button
          handleClick={deleteEducationField}
          btnClass={"removeField"}
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
  submitting,
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
    <div className="educationContainer">
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
          submitting={submitting}
        ></EducationField>
      ))}

      {status === "edit" && (
        <Button
          content={"Añadir otro estudio"}
          btnClass={"addField"}
          handleClick={addEducationField}
          type={"button"}
        ></Button>
      )}
    </div>
  );
}

export default EducationInfo;
