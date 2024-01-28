function Info({ data }) {
  return (
    <li>
      <p>{data.skill}</p>
    </li>
  );
}

function SkillInfoDisplay({ data, type }) {
  const skillArray = Array.from(data, ([name, value]) => value);

  return skillArray > 0 ? (
    <div className="habilidades">
      <p>Habilidades</p>
      {skillArray.map((value) => (
        <Info key={value.id} data={value}></Info>
      ))}
    </div>
  ) : (
    type === "preview" && (
      <div className="habilidades">
        <p>Habilidades</p>
        <p>No ha agregado habilidades</p>
      </div>
    )
  );
}

export default SkillInfoDisplay;
