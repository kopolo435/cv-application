import PersonalInfoDisplay from "./PersonalInfoDisplay";
import EducationInfoDisplay from "./EducationInfoDisplay";
import JobInfoDIsplay from "./JobInfoDisplay";
function Preview({ educationData, jobData, personalData, skillData }) {
  return (
    <div>
      <PersonalInfoDisplay data={personalData}></PersonalInfoDisplay>
      <EducationInfoDisplay data={educationData}></EducationInfoDisplay>
      <JobInfoDIsplay data={jobData}></JobInfoDIsplay>
    </div>
  );
}

export default Preview;
