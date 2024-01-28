function formatDateToString(dateValue) {
  return dateValue ? dateValue.toISOString().split("T")[0] : "";
}

function Info({ education }) {
  return (
    <li>
      <p>{education.school}</p>
      <p>{education.title}</p>
      <p>{formatDateToString(education.date)}</p>
    </li>
  );
}

function EducationInfoDisplay({ data, type }) {
  const educationArray = Array.from(data, ([name, value]) => value);

  return educationArray.length > 0 ? (
    <div className="education">
      <p>Estudios realizados</p>
      <ul>
        {educationArray.map((value) => (
          <Info key={value.id} education={value}></Info>
        ))}
      </ul>
    </div>
  ) : (
    type === "preview" && (
      <div className="education">
        <p>Estudios realizados</p>
        <p>No ha agregado estudios</p>
      </div>
    )
  );
}

export default EducationInfoDisplay;
