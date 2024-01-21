import { useState } from "react";
import Field from "./Field";
import DateField from "./DateField";
import Button from "./Button";
import TextAreaField from "./TextAreaField";
function JobField({ status, dataObj = null, jobData, handleDataMapUpdate }) {
  return (
    <div className="JobField">
      <Field
        type={"text"}
        label={"Compañia"}
        status={status}
        name={"company"}
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
        dataObj={dataObj}
        dataMap={jobData}
        dataObjProperty={"jobTitle"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></Field>
      <TextAreaField
        status={status}
        dataObj={dataObj}
        dataMap={jobData}
        dataObjProperty={"description"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></TextAreaField>
      <DateField
        status={status}
        name={"startDate"}
        dataObj={dataObj}
        dataMap={jobData}
        dataObjProperty={"startDate"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></DateField>
      <DateField
        status={status}
        name={"endDate"}
        dataObj={dataObj}
        dataMap={jobData}
        dataObjProperty={"endDate"}
        handleDataMapUpdate={handleDataMapUpdate}
      ></DateField>
    </div>
  );
}

function JobExperience({ status }) {
  const initialMap = new Map();
  initialMap.set("0", {
    id: "0",
    company: "",
    jobTitle: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [jobData, setJobData] = useState(initialMap);

  function getJobArray() {
    const array = Array.from(jobData, ([name, value]) => value);
    return array;
  }
  function addJobField() {
    const newDataObj = {
      id: `${jobData.size}`,
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
      {jobDataArray.map((data) => (
        <JobField
          status={status}
          dataObj={data}
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
