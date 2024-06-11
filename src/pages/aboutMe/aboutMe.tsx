import Skill from "./skill/skill"
import Projecct from "./project/project"
import Education from "./education/education"
import Carrer from "./carrer/carrer"
import SideBar from "./sidebar"
import { css } from "@emotion/react"

const AboutMe = () => {
    
    return <div 
    css={css`
            position:relative;
            background-color:#0b0c10;
            color:rgb(238, 238, 238);
            display: flex;
            flex-direction: row; 
            @media (max-width: 768px) {
                flex-direction: column; /* 화면 너비가 768px 이하일 때 row로 변경 */
            }
        `}
   >
       <SideBar/>
       <div style={{width:'100%'}}>
        <Skill/>
        <Education/>
        <Carrer/>
        <Projecct/>
       </div>
  
   
    </div>
}

export default AboutMe;



