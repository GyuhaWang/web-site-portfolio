import AboutMeLayout from "@/component/aboutMeLayout";
import DurationBox from "@/component/durationBox";
import ParticipantBox from "@/component/participantBox";
import ProjectBox from "@/component/projectBox";
import { projectData } from "@/data/projectData";
import useRegisterComponentRef from "@/hook/useRegisterComponent";
import { css } from "@emotion/react";

const Projecct = ()=> {
    const ref = useRegisterComponentRef('project') as React.RefObject<HTMLDivElement>;
    return (
    <section id="project" ref={ref} >
        <AboutMeLayout>
            <div style={{width:'100%'}}>
            
        
            <div  css={css`
             display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-template-rows:minmax(400px, auto);
            gap:2rem;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;  
            }
        `}>
            {projectData.map((project,index)=>
          
            <div key={index} style={{ display:"flex", flexDirection:"column", gap:'1rem'}}>
              <div style={{display:'flex', gap:'1rem'}}>
              <DurationBox>{`${project.startDate} - ${project.endDate}`}</DurationBox>
              <ParticipantBox>{project.participantsNum}</ParticipantBox>
              </div>
             <ProjectBox data={project} color="#F6DCAC"/>
         </div>
             )} 
           </div>
           </div>
  
    </AboutMeLayout>
    </section>)
}

export default Projecct;