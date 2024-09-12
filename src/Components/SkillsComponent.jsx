import styled from "styled-components";

function SkillsComponent({Title , Skills}) {

    return ( 
        <SkillsComponentstyle className="mt-4 ps-4">
            <h5 className="text-uppercase border-bottom pb-2">{Title}</h5>
            <div className="pt-1">
                {Skills().map(SK => {
                    return(
                        <SKillsWithPercentage skill={SK.skill} percentage={SK.Percentage} />
                    )
                })}
            </div> 
        </SkillsComponentstyle>
    );
}

export default SkillsComponent;

const SkillsComponentstyle = styled.div`
  color: white;
`;

function SKillsWithPercentage({skill , percentage}) {
    return ( 
        <>
            <label>{skill}</label>
            <progress className="d-block w-100" value={percentage} max={100}></progress>
        </>
    );
}