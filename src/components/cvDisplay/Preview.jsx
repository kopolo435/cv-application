import PersonalInfoDisplay from "./PersonalInfoDisplay";
import EducationInfoDisplay from "./EducationInfoDisplay";
import JobInfoDIsplay from "./JobInfoDisplay";
import SkillInfoDisplay from "./SkillInfoDisplay";
function Preview({ educationData, jobData, personalData, skillData }) {
  return (
    <div>
      <PersonalInfoDisplay data={personalData}></PersonalInfoDisplay>
      <EducationInfoDisplay data={educationData}></EducationInfoDisplay>
      <JobInfoDIsplay data={jobData}></JobInfoDIsplay>
      <SkillInfoDisplay data={skillData}></SkillInfoDisplay>
    </div>
  );
}

export default Preview;
