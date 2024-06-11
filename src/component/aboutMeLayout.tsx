import { Project } from "@/types/project";
import { css } from "@emotion/react"
import Image from "next/image";
import {  ReactElement, useState } from "react"

const AboutMeLayout = ({children}:{children:ReactElement}) => {
   
    return  (<div css={css`
    min-height:100vh;
    width:100%;
    display:flex;  
     flex-grow:1;
      flex-direction:column; 
      justify-content:center;
       align-items:start;
    padding:2rem;
    border-bottom: 1px dashed #45a291;
 
   `}
  
   >
    {children}
   </div>)
}

export default AboutMeLayout;