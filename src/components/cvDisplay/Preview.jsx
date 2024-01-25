import PersonalInfoDisplay from "./PersonalInfoDisplay";
import EducationInfoDisplay from "./EducationInfoDisplay";
function Preview({ educationData, jobData, personalData, skillData }) {
  return (
    <div>
      <PersonalInfoDisplay data={personalData}></PersonalInfoDisplay>
      <EducationInfoDisplay data={educationData}></EducationInfoDisplay>
    </div>
  );
}

export default Preview;
