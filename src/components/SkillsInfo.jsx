import Field from "./Field";
import Button from "./Button";
function SkillField({ status, skillData, dataObj, handleDataMapUpdate }) {
  return (
    <Field
      type={"text"}
      label={"Habilidad"}
      name={"habilidad"}
      status={status}
      dataMap={skillData}
      dataObj={dataObj}
      handleDataMapUpdate={handleDataMapUpdate}
      dataObjProperty={"skill"}
    ></Field>
  );
}

function SkillInfo({ status, skillData, setSkillData }) {
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
      {skillDataArray.map((data) => (
        <SkillField
          status={status}
          dataObj={data}
          key={data.id}
          skillData={skillData}
          handleDataMapUpdate={setSkillData}
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
