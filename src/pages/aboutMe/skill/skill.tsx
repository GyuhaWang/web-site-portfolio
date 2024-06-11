import ImageBox from "@/component/ImageBox";
import AboutMeLayout from "@/component/aboutMeLayout";
import { skillSetData } from "@/data/skillData";
import useRegisterComponentRef from "@/hook/useRegisterComponent";

const Skill = ()=> {
    const ref = useRegisterComponentRef('skill') as React.RefObject<HTMLDivElement>;
    return   <section id='skill' ref={ref} >
        <AboutMeLayout>
    <div>
        <h1 style={{textTransform:'uppercase'}}>language</h1>
        <div style={{display:"flex",flexWrap:'wrap', flexDirection:"row", gap:'12px'}}>
        {skillSetData.language.map((skill, index)=> <ImageBox key={index} src={skill.src} title={skill.title}/>)}
        </div>
        <h1 style={{textTransform:'uppercase'}}>framework</h1>
        <div style={{display:"flex",flexWrap:'wrap', flexDirection:"row", gap:'12px'}}>
        {skillSetData.framework.map((item, index)=> <ImageBox key={index} src={item.src} title={item.title}/>)}
        </div>
        <h1 style={{textTransform:'uppercase'}}>colaborate & tools</h1>
        <div style={{display:"flex",flexWrap:'wrap', flexDirection:"row", gap:'12px'}}>
        {skillSetData["tools&collaborations"].map((item, index)=> <ImageBox key={index} src={item.src} title={item.title}/>)}
        </div>
        
    </div>
    </AboutMeLayout>

   </section>
}

export default Skill;