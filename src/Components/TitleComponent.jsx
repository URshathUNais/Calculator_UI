import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";

function TitleComponent({image_url , name , job}) {
    return ( 
        <TitleComponentStyle>
            <Row>
                <Col style={{background: "#461313"}} lg={3} className="d-flex justify-content-center">
                    <Image src={image_url} id="user-profile-img" roundedCircle />
                </Col>
                <Col lg={9} className="d-flex flex-column justify-content-center ps-5">
                    <h1>{name}</h1>
                    <h3>{job}</h3>
                </Col>
            </Row>
        </TitleComponentStyle>
    );
}

export default TitleComponent;

const TitleComponentStyle = styled.div`
    #user-profile-img{
        width: 150px;
        height: 150px;
        margin-top: 30px;
        border: 5px solid white;
    }
`;