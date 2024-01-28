function Info({ data }) {
  return (
    <li>
      <p>{data.skill}</p>
    </li>
  );
}

function SkillInfoDisplay({ data }) {
  const skillArray = Array.from(data, ([name, value]) => value);

  return (
    <div className="habilidades">
      <p>Habilidades</p>
      {skillArray.map((value) => (
        <Info key={value.id} data={value}></Info>
      ))}
    </div>
  );
}

export default SkillInfoDisplay;
