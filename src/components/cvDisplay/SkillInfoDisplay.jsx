function Info({ data }) {
  return (
    <li>
      <p>{data.skill}</p>
    </li>
  );
}

function SkillInfoDisplay({ data, type }) {
  const skillArray = Array.from(data, ([name, value]) => value);

  return skillArray.length > 0 ? (
    <div className="habilidades">
      <p className="listTitle">Habilidades</p>
      <ul>
        {skillArray.map((value) => (
          <Info key={value.id} data={value}></Info>
        ))}
      </ul>
    </div>
  ) : (
    type === "preview" && (
      <div className="habilidades">
        <p className="listTitle">Habilidades</p>
        <p>No ha agregado habilidades</p>
      </div>
    )
  );
}

export default SkillInfoDisplay;
