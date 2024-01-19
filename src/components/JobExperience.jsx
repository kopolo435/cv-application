import Field from "./Field";
import DateField from "./DateField";
import TextAreaField from "./TextAreaField";
function JobField({ status }) {
  return (
    <div className="JobField">
      <Field type={"text"} status={status} name={"companyName"}></Field>
      <Field type={"text"} status={status} name={"jobTitle"}></Field>
      <TextAreaField status={status}></TextAreaField>
      <DateField status={status} name={"fecha inicio"}></DateField>
      <DateField status={status} name={"fecha final"}></DateField>
    </div>
  );
}

function JobExperience({ status }) {
  return (
    <div>
      <JobField status={status}></JobField>
    </div>
  );
}

export default JobExperience;
