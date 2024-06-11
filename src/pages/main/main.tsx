'use client'
import BouncingButton from "@/component/bouncingButton";
import { useScroll } from "@/hook/useScroll";
import Image from "next/image";

const Main = () => {
const scrollController = useScroll();
    return (
    <div style={{position: 'sticky',height:'100vh',top:0, overflowX:'hidden'}}>
 <div 
style={{height:'100vh',width:'100vw',   position:'absolute',top:0,
backgroundImage:'url(/background-pattern.jpg)', backgroundPosition:'center', filter:'blur(1px)', backgroundSize:'cover'
}}> 

</div>
<div style={{height:'100vh', width:'100vw', position:'absolute', display:'flex',alignItems:'start', justifyContent:"space-between", flexDirection:'column',  color:'rgb(104, 109, 118)', overflowY:"hidden"}}>

<div style={{flexGrow:'10',width:'100%', display:"flex", flexWrap:"wrap", flexDirection:"row", alignItems:"stretch",}}>
<div style={{display:"flex",flexGrow:'1', color:'rgb(50, 50, 50)', alignItems:"start", justifyContent:"start", fontSize:'240%',paddingLeft:'1rem' }}>
 <h1 style={{textTransform:"uppercase"}} >Frontend<br/>Developer</h1>
 </div>
<div style={{display:"flex", flexGrow:'1', flexDirection:'column', justifyContent:'end', alignItems:'end', color:'black',  fontSize:'1.2rem', paddingRight:'2rem'}}> 

<h1>왕규하</h1>
<h3>문제를 정의하고 해결하는 개발자</h3>
</div>
</div>

<div onClick={()=>{scrollController('skill');} } style={{flexGrow:1, display: "flex",paddingTop:'15px', paddingBottom:'15px', width:'100%',backgroundColor:'transparent', justifyContent:"center", alignItems:"center"}}><BouncingButton child={<Image src='/icon-downArrow.svg' height={40} width={40} alt='scrollToNext'/>} action={()=>{scrollController('skill');}}/></div>
</div>
    </div>
    )
}

export default Main;