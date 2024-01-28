import PersonalInfoDisplay from "./PersonalInfoDisplay";
import EducationInfoDisplay from "./EducationInfoDisplay";
import JobInfoDIsplay from "./JobInfoDisplay";
import SkillInfoDisplay from "./SkillInfoDisplay";
function Preview({
  educationData,
  jobData,
  personalData,
  skillData,
  divClass = "preview",
}) {
  return (
    <div className={divClass}>
      <div className="personalInfo">
        <p>Datos personales</p>
        <PersonalInfoDisplay data={personalData}></PersonalInfoDisplay>
      </div>
      <EducationInfoDisplay data={educationData}></EducationInfoDisplay>
      <JobInfoDIsplay data={jobData}></JobInfoDIsplay>
      <SkillInfoDisplay data={skillData}></SkillInfoDisplay>
    </div>
  );
}

export default Preview;
