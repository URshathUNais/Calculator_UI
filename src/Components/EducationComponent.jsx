import styled from "styled-components";

function EducationComponent() {

    const EducationList = () => {
        return [
            {year : "2019" , qualification : "HND" , university : "London metropolitan university"},
            {year : "2021" , qualification : "Degree" , university : "Kingston university"},
            {year : "2023" , qualification : "MBA" , university : "London metropolitan university"}
        ]
    }

    return ( 
        <EducationComponentStyle className="mt-4 ps-4">
            <h5 className="text-uppercase border-bottom pb-2">Education</h5>
            <div className="pt-1">
                {EducationList().map(EDU => {
                    return[
                        <EducationInfo year={EDU.year} qualification={EDU.qualification} university={EDU.university} />
                    ]
                })}
            </div> 
        </EducationComponentStyle>
    );
}

export default EducationComponent;

const EducationComponentStyle = styled.div`
  color: white;
`;

function EducationInfo({year , qualification , university}) {
    return ( 
        <EducationInfoStyle>
            <span>{year}</span>
            <div className="qua_text">{qualification}</div>
            <div className="uni_text">{university}</div>
        </EducationInfoStyle>
    );
}

const EducationInfoStyle = styled.div`

  margin-bottom: 10px;
  .qua_text{
    font-size: 20px;
    font-weight: bold;
  }
  .uni_text{
    font-size: 15px;
    font-weight: bold;
  }
`;