import { Row } from "react-bootstrap";
import styled from "styled-components";

function ExperienceComponent() {

  const getexperiencedetails = () => 
  {
    return[
      {position : "Junior Software Developer" , company : "Xas Group" , join_date : "2019.02.20" , leave_date : "2020.02.20" , description : " It provides potential employers with a clear understanding of an applicant's suitability for a specific job role or position. A well-crafted CV is essential in highlighting key accomplishments and demonstrating the candidate's potential value to prospective employers."},
      {position : "Junior Software Developer" , company : "Xas Group" , join_date : "2019.02.20" , leave_date : "2020.02.20" , description : " It provides potential employers with a clear understanding of an applicant's suitability for a specific job role or position. A well-crafted CV is essential in highlighting key accomplishments and demonstrating the candidate's potential value to prospective employers."},
      {position : "Junior Software Developer" , company : "Xas Group" , join_date : "2019.02.20" , leave_date : "2020.02.20" , description : " It provides potential employers with a clear understanding of an applicant's suitability for a specific job role or position. A well-crafted CV is essential in highlighting key accomplishments and demonstrating the candidate's potential value to prospective employers."},
    ]
  }

    return ( 
        <ExperienceComponentStyle>
            <h4>Experience</h4>
            <Row>
              {
                getexperiencedetails().map(ex => {
                  return(
                    <div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <b className="d-block">{ex.position}</b>
                          <i>{ex.company}</i>
                        </div>
                        <div className="pe-4">{ex.join_date + " - " + ex.leave_date}</div>
                      </div>
                      <p className="pe-4">{ex.description}</p>
                    </div>
                  )
                })
              }
            </Row>
        </ExperienceComponentStyle>
    );
}

export default ExperienceComponent;

const ExperienceComponentStyle = styled.div`
  h4{
    text-transform: uppercase;
    margin-bottom: 15px;
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
  }

  p{
    text-align: justify;
  }
`;