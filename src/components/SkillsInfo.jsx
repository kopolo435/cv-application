import Field from "./Field";
import Button from "./Button";
import { requiredTestField } from "../javascript/inputValidation";
function SkillField({
  status,
  index,
  skillData,
  dataObj,
  handleDataMapUpdate,
  errors,
  setErrors,
  submitting,
}) {
  function deleteSkillField() {
    const newMap = new Map([...skillData]);
    const newErrors = new Map([...errors]);
    newMap.delete(dataObj.id);
    newErrors.delete(dataObj.id);
    handleDataMapUpdate(newMap);
    setErrors(newErrors);
  }
  return (
    <div>
      <Field
        type={"text"}
        label={"Habilidad"}
        name={"habilidad"}
        index={index}
        status={status}
        dataMap={skillData}
        dataObj={dataObj}
        handleDataMapUpdate={handleDataMapUpdate}
        dataObjProperty={"skill"}
        errors={errors}
        setErrors={setErrors}
        inputValidation={requiredTestField}
        submitting={submitting}
      ></Field>
      {status === "edit" && (
        <Button
          handleClick={deleteSkillField}
          type={"button"}
          content={"Borrar"}
        ></Button>
      )}
    </div>
  );
}

function SkillInfo({
  status,
  skillData,
  setSkillData,
  errors,
  setErrors,
  submitting,
}) {
  function getSkillArray() {
    const array = Array.from(skillData, ([name, value]) => value);
    return array;
  }
  function addSkillField() {
    const newDataObj = {
      id: `${crypto.randomUUID()}`,
      skill: "",
    };
    const newMap = new Map([...skillData]);
    newMap.set(newDataObj.id, newDataObj);
    setSkillData(newMap);
  }
  const skillDataArray = getSkillArray();
  return (
    <div className="skillInfo">
      {skillDataArray.map((data, index) => (
        <SkillField
          status={status}
          dataObj={data}
          index={index}
          key={data.id}
          skillData={skillData}
          handleDataMapUpdate={setSkillData}
          errors={errors}
          setErrors={setErrors}
          submitting={submitting}
        ></SkillField>
      ))}

      {status === "edit" && (
        <Button
          type={"button"}
          content={"Añadir habilidad"}
          handleClick={addSkillField}
        ></Button>
      )}
    </div>
  );
}

export default SkillInfo;
