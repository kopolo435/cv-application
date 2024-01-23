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
}) {
  function deleteSkillField() {
    const newMap = new Map([...skillData]);
    newMap.delete(dataObj.id);
    handleDataMapUpdate(newMap);
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

function SkillInfo({ status, skillData, setSkillData, errors, setErrors }) {
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
