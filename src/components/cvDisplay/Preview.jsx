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
      <div className="rectangle"></div>
      <div className="triangle"></div>
      <div className="previewContent">
        <div className="personalInfo">
          <p>Datos personales</p>
          <PersonalInfoDisplay data={personalData}></PersonalInfoDisplay>
        </div>
        <EducationInfoDisplay
          data={educationData}
          type={divClass}
        ></EducationInfoDisplay>
        <JobInfoDIsplay data={jobData} type={divClass}></JobInfoDIsplay>
        <SkillInfoDisplay data={skillData} type={divClass}></SkillInfoDisplay>
      </div>
    </div>
  );
}

export default Preview;
