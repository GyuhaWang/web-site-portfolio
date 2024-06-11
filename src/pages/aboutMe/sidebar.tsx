import useCurrentComponent from "@/hook/useCurrentComponent";
import { useScroll } from "@/hook/useScroll";
import { css } from "@emotion/react";

const SideBar = () => {
    const scrollToComponet = useScroll();
    const currentComponent = useCurrentComponent();
    
    const index = ['skill','education','carrer','project']
    return  <div 
      css = {css`
      position:sticky;
      height:100vh;
      top:0;
      min-width:'14rem';
      backgroun-color:#0b0c10;
      padding-left:2rem;
      padding-top:2rem;
      @media (max-width: 768px) {
    height:auto;
    display:flex;
    z-index:2;
    background-color:black;
    padding:0;
    justify-content:space-around;
    
    }
      `}
   >
        {index.map((idx, index)=> 
        <div key={index}><button  style={{border:'none', backgroundColor:'black'}} onClick={()=>scrollToComponet(idx)}>
<h1 css = {css`
 @media (max-width: 768px) {
    font-size:100%
 }
`} style={{color: `${idx == currentComponent?'#66fcf1':'#45a291'}`, textTransform:'uppercase'}}>{idx}</h1>
</button></div>)}
   </div>
   }
//    #0b0c10
//    1f2833
export default SideBar;


