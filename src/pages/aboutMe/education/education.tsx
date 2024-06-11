import AboutMeLayout from "@/component/aboutMeLayout";
import DurationBox from "@/component/durationBox";
import useRegisterComponentRef from "@/hook/useRegisterComponent";

const Education = () => {
    const ref = useRegisterComponentRef('education') as React.RefObject<HTMLDivElement>;
    return  <section id="education" ref={ref} > 
   <AboutMeLayout>
   
       <div >
        <DurationBox>2018 -2024</DurationBox>
        <div style={{display:'flex', flexDirection:"column", gap:'3rem'}}>
            <div>
            <h1 style={{textTransform:'uppercase'}}>한국외국어대학교</h1>
      
      <ul style={{display:'flex', flexDirection:"column",gap:'1rem'}}>
          <li><h3>GlobalBusiness&Technology (경영학사)</h3></li>
          <li><h3>컴퓨터.전자시스템 (공학사)</h3></li>
      </ul>
      
            </div>
            <div>
            <h1 style={{textTransform:'uppercase'}}>수상내역</h1>
 
 <ul style={{display:'flex', flexDirection:"column",gap:'1rem'}}>
    <li><h3>제6회 한국외국어대학교 경상대 학술제</h3></li>
    <li><h3>2023년 도시형소상공인 직접지구 캡스톤 경진대회</h3></li>
</ul>
            </div>
        </div>
    
            </div>
    
    </AboutMeLayout>

   </section>
}

export default Education;