import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

function ReferenecComponent() {

  const getReferenceDetails = () =>
  {
    return[
      {name : "Mr.David" , position : "Software Engineer" , company : "Xas Group" , tell : "0774519176" , email : "Xas@gmail.com"},
      {name : "Mr.Rahul" , position : "Senior Software Engineer" , company : "Xas Group" , tell : "0704519176" , email : "Xas@gmail.com"},
    ]
  } 

    return ( 
        <ReferenceComponentStyle>
            <h4>References</h4>
            <Row>
              {
                getReferenceDetails().map(ref =>
                {
                  return (
                  <Col>
                    <div><b>Name : </b>{ref.name}</div>
                    <div><b>Position : </b>{ref.position}</div>
                    <div><b>Company : </b>{ref.company}</div>
                    <div><b>Email : </b>{ref.email}</div>
                    <div><b>Tell : </b>{ref.tell}</div>
                  </Col>
                  )
                }
                )
              }
            </Row>
        </ReferenceComponentStyle>
    );
}

export default ReferenecComponent;

const ReferenceComponentStyle = styled.div`
  h4{
    text-transform: uppercase;
    margin-bottom: 15px;
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
  }
`;