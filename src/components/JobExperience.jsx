import { useState } from "react";
import Field from "./Field";
import DateField from "./DateField";
import Button from "./Button";
import TextAreaField from "./TextAreaField";
import {
  requiredTestField,
  dateInputTest,
} from "../javascript/inputValidation";
function JobField({
  status,
  dataObj = null,
  index,
  jobData,
  handleDataMapUpdate,
  errors,
  setErrors,
  submitting,
}) {
  function deleteJobField() {
    const newMap = new Map([...jobData]);
    const newErrors = new Map([...errors]);
    newMap.delete(dataObj.id);
    newErrors.delete(dataObj.id);
    handleDataMapUpdate(newMap);
    setErrors(newErrors);
  }
  return (
    <div className="jobField">
      <Field
        type={"text"}
        label={"Compañia"}
        status={status}
        name={"company"}
        index={index}
        dataObj={dataObj}
        dataMap={jobData}
        dataObjProperty={"company"}
        handleDataMapUpdate={handleDataMapUpdate}
        errors={errors}
        setErrors={setErrors}
        inputValidation={requiredTestField}
        submitting={submitting}
      ></Field>
      <Field
        type={"text"}
        label={"Posicion"}
        status={status}
        name={"jobTitle"}
        index={index}
        dataObj={dataObj}
        dataMap={jobData}
        dataObjProperty={"jobTitle"}
        handleDataMapUpdate={handleDataMapUpdate}
        errors={errors}
        setErrors={setErrors}
        inputValidation={requiredTestField}
        submitting={submitting}
      ></Field>
      <TextAreaField
        status={status}
        dataObj={dataObj}
        name={"experiencia"}
        label={"Funciones"}
        index={index}
        dataMap={jobData}
        dataObjProperty={"description"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></TextAreaField>
      <div className="jobDates">
        <DateField
          status={status}
          name={"startDate"}
          label={"Inicio"}
          index={index}
          dataObj={dataObj}
          dataMap={jobData}
          dataObjProperty={"startDate"}
          handleDataMapUpdate={handleDataMapUpdate}
          errors={errors}
          setErrors={setErrors}
          inputValidation={dateInputTest}
          submitting={submitting}
        ></DateField>
        <DateField
          status={status}
          name={"endDate"}
          label={"Final"}
          index={index}
          dataObj={dataObj}
          dataMap={jobData}
          dataObjProperty={"endDate"}
          handleDataMapUpdate={handleDataMapUpdate}
          errors={errors}
          setErrors={setErrors}
          inputValidation={dateInputTest}
          submitting={submitting}
        ></DateField>
      </div>
      {status === "edit" && (
        <Button
          handleClick={deleteJobField}
          btnClass={"removeField"}
          type={"button"}
          content={"Borrar"}
        ></Button>
      )}
    </div>
  );
}

function JobExperience({
  status,
  jobData,
  setJobData,
  errors,
  setErrors,
  submitting,
}) {
  function getJobArray() {
    const array = Array.from(jobData, ([name, value]) => value);
    return array;
  }
  function addJobField() {
    const newDataObj = {
      id: `${crypto.randomUUID()}`,
      company: "",
      jobTitle: "",
      description: "",
      startDate: "",
      endDate: "",
    };
    const newMap = new Map([...jobData]);
    newMap.set(newDataObj.id, newDataObj);
    setJobData(newMap);
  }
  const jobDataArray = getJobArray();
  return (
    <div className="jobContainer">
      {jobDataArray.map((data, index) => (
        <JobField
          status={status}
          dataObj={data}
          index={index}
          key={data.id}
          jobData={jobData}
          handleDataMapUpdate={setJobData}
          errors={errors}
          setErrors={setErrors}
          submitting={submitting}
        ></JobField>
      ))}
      {status === "edit" && (
        <Button
          content={"Añadir otro estudio"}
          btnClass={"addField"}
          handleClick={addJobField}
          type={"button"}
        ></Button>
      )}
    </div>
  );
}

export default JobExperience;
