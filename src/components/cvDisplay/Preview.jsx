import PersonalInfoDisplay from "./PersonalInfoDisplay";

function Preview({ educationData, jobData, personalData, skillData }) {
  return (
    <div>
      <PersonalInfoDisplay data={personalData}></PersonalInfoDisplay>
    </div>
  );
}

export default Preview;
