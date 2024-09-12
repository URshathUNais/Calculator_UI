import { Col, Row } from 'react-bootstrap';
import './App.css';
import TitleComponent from './Components/TitleComponent';
import ProfileComponent from './Components/ProfileComponent';
import ExperienceComponent from './Components/ExperienceComponent';
import ReferenecComponent from './Components/ReferenceComponent';
import SkillsComponent from './Components/SkillsComponent';
import EducationComponent from './Components/EducationComponent';

function App() {
  return (
    <div className="App">
      <Row>
        <TitleComponent image_url={"./images/user.jpg"} name={"M.U Mohamed Urshath Khan"} job={"Full Stack Developer"}/>
      </Row>
      <Row>
        <Col lg={3} style={{background: "#461313"}}>
          <SkillsComponent Title={"Language Skills"} Skills={ () => {
            return [
              {skill : "C#" , Percentage : 80},
              {skill : "Java" , Percentage : 70},
              {skill : "React JS" , Percentage : 50},
              {skill : "PHP" , Percentage : 30},
            ]
          }} />

          <EducationComponent/>

          <SkillsComponent Title={"SOft Skills"} Skills={ () => {
            return [
              {skill : "Team Work" , Percentage : 90},
              {skill : "Leadership" , Percentage : 75},
            ]
          }} />
        </Col>
        <Col lg={9} className='ps-5'>
          <ProfileComponent ProfileParagraph={"The CV profile paragraph can be rewritten in a different way to highlight the candidate's skills and achievements. It is important to focus on the candidate's unique selling points and showcase their expertise in a concise manner. By using strong action verbs and quantifiable results, the CV profile paragraph can effectively demonstrate the candidate's value to potential employers. Additionally, incorporating keywords relevant to the desired job role can help optimize the CV for applicant tracking systems."} />
          <ExperienceComponent/>
          <ReferenecComponent/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
