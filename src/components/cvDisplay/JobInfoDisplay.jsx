function formatDateToString(dateValue) {
  return dateValue ? dateValue.toISOString().split("T")[0] : "";
}

function Info({ data }) {
  return (
    <li>
      <p>{data.company}</p>
      <p>{data.jobTitle}</p>
      <p className="jobDescription">{data.description}</p>
      <p>
        {formatDateToString(data.startDate) && "Desde"}
        <span> {formatDateToString(data.startDate)} </span>
        {formatDateToString(data.endDate) && "hasta"}
        <span> {formatDateToString(data.endDate)}</span>
      </p>
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
