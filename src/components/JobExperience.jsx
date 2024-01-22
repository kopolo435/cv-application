import { useState } from "react";
import Field from "./Field";
import DateField from "./DateField";
import Button from "./Button";
import TextAreaField from "./TextAreaField";
function JobField({
  status,
  dataObj = null,
  index,
  jobData,
  handleDataMapUpdate,
}) {
  function deleteJobField() {
    const newMap = new Map([...jobData]);
    newMap.delete(dataObj.id);
    handleDataMapUpdate(newMap);
  }
  return (
    <div className="JobField">
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
      ></Field>
      <TextAreaField
        status={status}
        dataObj={dataObj}
        name={"experiencia"}
        index={index}
        dataMap={jobData}
        dataObjProperty={"description"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></TextAreaField>
      <DateField
        status={status}
        name={"startDate"}
        index={index}
        dataObj={dataObj}
        dataMap={jobData}
        dataObjProperty={"startDate"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></DateField>
      <DateField
        status={status}
        name={"endDate"}
        index={index}
        dataObj={dataObj}
        dataMap={jobData}
        dataObjProperty={"endDate"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></DateField>
      {status === "edit" && (
        <Button
          handleClick={deleteJobField}
          type={"button"}
          content={"Borrar"}
        ></Button>
      )}
    </div>
  );
}

function JobExperience({ status, jobData, setJobData }) {
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
    <div>
      {jobDataArray.map((data, index) => (
        <JobField
          status={status}
          dataObj={data}
          index={index}
          key={data.id}
          jobData={jobData}
          handleDataMapUpdate={setJobData}
        ></JobField>
      ))}
      {status === "edit" && (
        <Button
          content={"Añadir otro estudio"}
          btnClass={"addEducation"}
          handleClick={addJobField}
          type={"button"}
        ></Button>
      )}
    </div>
  );
}

export default JobExperience;
