import styled from "styled-components";

function ProfileComponent({ProfileParagraph}) {
    return ( 
        <ProfileComponentStyle>
            <h4>Profile</h4>
            <p className="pe-4">{ProfileParagraph}</p>
        </ProfileComponentStyle>
    );
}

export default ProfileComponent;

const ProfileComponentStyle = styled.div`
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