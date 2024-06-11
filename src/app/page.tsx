'use client'
import AboutMe from "@/pages/aboutMe/aboutMe";
import End from "@/pages/end/end";
import Main from "@/pages/main/main";



export default function Home() {
  return (
 
   <div style={{ display:'flex', flexDirection:'column', padding:'0', margin:'0',}}>
    <Main/>
    <AboutMe/>
    <End/>
   </div>
 
  );
}
