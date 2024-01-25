function Info({ data }) {
  return (
    <div>
      <p>{data.skill}</p>
    </div>
  );
}

function SkillInfoDisplay({ data }) {
  const skillArray = Array.from(data, ([name, value]) => value);

  return (
    <div>
      {skillArray.map((value) => (
        <Info key={value.id} data={value}></Info>
      ))}
    </div>
  );
}

export default SkillInfoDisplay;
