function formatDateToString(dateValue) {
  return dateValue ? dateValue.toISOString().split("T")[0] : "";
}

function Info({ data }) {
  return (
    <li>
      <p>{data.company}</p>
      <p>{data.jobTitle}</p>
      <p>{data.description}</p>
      <p>{formatDateToString(data.startDate)}</p>
      <p>{formatDateToString(data.endDate)}</p>
    </li>
  );
}

function JobInfoDIsplay({ data }) {
  const jobData = Array.from(data, ([name, value]) => value);

  return (
    <div className="jobExperience">
      <p>Experiencia laboral</p>
      <ul>
        {jobData.map((value) => (
          <Info key={value.id} data={value}></Info>
        ))}
      </ul>
    </div>
  );
}

export default JobInfoDIsplay;
