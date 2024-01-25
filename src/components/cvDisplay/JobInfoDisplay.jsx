function formatDateToString(dateValue) {
  return dateValue ? dateValue.toISOString().split("T")[0] : "";
}

function Info({ data }) {
  return (
    <div>
      <p>{data.company}</p>
      <p>{data.jobTitle}</p>
      <p>{data.description}</p>
      <p>{formatDateToString(data.startDate)}</p>
      <p>{formatDateToString(data.endDate)}</p>
    </div>
  );
}

function JobInfoDIsplay({ data }) {
  const jobData = Array.from(data, ([name, value]) => value);

  return jobData.map((value) => <Info key={value.id} data={value}></Info>);
}

export default JobInfoDIsplay;
