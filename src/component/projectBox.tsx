import { Project } from "@/types/project";
import { css } from "@emotion/react"
import Image from "next/image";
import {  useState } from "react"
import SkillBox from "./skillBox";

const ProjectBox = ({data, color ='#FEAE6F'}:{data:Project, color?: string}) => {
    const [isHovered, setIsHovered] = useState(false);
    return  (<div css={css`
    position:relative;
    background-color: white;
    color:black;
    border-radius:8px;
    display:flex;
    height:100%;
    word-wrap:break-word;
    // aspect-ratio:16/9
    @media (max-width: 768px) {
        flex-direction:column
    }

   `}
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
   >
    <div 
    css = {css`
    display:flex;
    flex-grow:1;
    background-color: ${color};
    border-top-left-radius:8px;
    border-bottom-left-radius:8px;
     padding:1.5rem;
     @media (max-width: 768px) {
        border-top-right-radius:8px;
        border-bottom-left-radius:0px;
      
    }
    `}
    style={{display:'flex', flexGrow:'1' , backgroundColor:`${color}`, borderTopLeftRadius:'8px', borderBottomLeftRadius:'8px',padding:'1.5rem' }}/> 
 
   
    <div style={{display:'flex', flexDirection:'column',  flexGrow:'7', padding:'16px', gap:'2rem' }}>
    <div style={{display:'flex', flexDirection:'column', gap:'0.3rem' }}>
    <div style={{fontSize:'1.8rem', fontWeight:"600"}}>{data.title}</div>
    <div style={{fontSize:'0.8rem', fontWeight:"500"}}> { data.projectDetail}</div>
    <div  style={{fontSize:'100%', fontWeight:"500"}}>@{data.role}</div>
   
    </div>
   
   <div  style={{display:'flex', flexDirection:'column', gap:'0.3rem' }}>
       {data.content.map((content,index)=> <div key={index}>
        <div style={{fontSize:'1rem', fontWeight:"600"}}>- {content}</div>
       </div>)}
       </div>
    </div>
    <div 
    css= {css`
    display:flex;
    flex-direction:column;
    flex-grow:2;
    padding:14px;
    justify-content:start;
    gap:2px;
    max-width:20%;
    @media (max-width: 768px) {
        flex-direction:row;
        flex-wrap:wrap;
        max-width:100%;

    }
    `}
    >
    {data.stack.map((content,index)=> <div key={index}>
       <SkillBox>{content}</SkillBox>
       </div>)}
    </div>

                <div css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: rgba(254, 174, 111,0.8);
                    border-radius:8px;
                    width:${isHovered?'100%':'0%'};
                    transition: width 0.2s ease-in-out;

                  
                    
                `}>
                    <div css={css`
                        color: white;
                        font-size: 1rem;
                        text-transform:uppercase;
                          visibility:${isHovered?'visible':'hidden'};
                          display:flex;
                          flex-direction:column;
                    `}>
                      { data.link&& <a 
                      href={data.link}
                      css={css`
                        display:flex;
                        width:8rem;
                        aspect-ratio: 10/4;
                        background-color:transparent;
                     align-items:center;
                     justify-content:center;
                     color:black;
                     border: 2px solid black;
                     font-size:100%;
                     font-weight:bold
                        `}>자세히 보기</a>}
                    </div>
                </div>
          
   </div>)
}

export default ProjectBox;