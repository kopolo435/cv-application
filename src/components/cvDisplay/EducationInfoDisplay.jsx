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

function EducationInfoDisplay({ data }) {
  const educationArray = Array.from(data, ([name, value]) => value);

  return (
    <ul>
      {educationArray.map((value) => (
        <Info key={value.id} education={value}></Info>
      ))}
    </ul>
  );
}

export default EducationInfoDisplay;
