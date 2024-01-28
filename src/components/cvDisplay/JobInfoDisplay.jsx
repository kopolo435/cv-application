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

function JobInfoDIsplay({ data, type }) {
  const jobData = Array.from(data, ([name, value]) => value);

  return jobData.length > 0 ? (
    <div className="jobExperience">
      <p className="listTitle">Experiencia laboral</p>
      <ul>
        {jobData.map((value) => (
          <Info key={value.id} data={value}></Info>
        ))}
      </ul>
    </div>
  ) : (
    type === "preview" && (
      <div className="jobExperience">
        <p className="listTitle">Experiencia laboral</p>
        <p>No ha agregado experiencia laboral</p>
      </div>
    )
  );
}

export default JobInfoDIsplay;
