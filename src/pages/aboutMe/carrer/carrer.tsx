import AboutMeLayout from "@/component/aboutMeLayout";
import DurationBox from "@/component/durationBox";
import ProjectBox from "@/component/projectBox";
import { carrerData } from "@/data/carrerData";
import useRegisterComponentRef from "@/hook/useRegisterComponent";
import { css } from "@emotion/react";

const Carrer = () => {
    const ref = useRegisterComponentRef('carrer') as React.RefObject<HTMLDivElement>;
    return <section id="carrer" ref={ref} >
        <AboutMeLayout><div style={{width:'100%'}}>
        {carrerData.map((carrer, index)=>
            <div key={index} style={{flexGrow:'1'}}> 
            <DurationBox>{`${carrer.startDate} - ${carrer.endDate}`}</DurationBox>
            <h2>{carrer.companyName}</h2>
            <h2 style={{textTransform:"uppercase"}}>{carrer.role}</h2>
            <div 
            css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-template-rows:minmax(400px, auto);
            gap:2rem;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;  
            }
        `}
            >
           {carrer.project.map((project,index)=>
           <ProjectBox key={index} data={project}/>
           )} </div>
           </div>
        )}</div>
        </AboutMeLayout>
        
    </section>

}

export default Carrer;