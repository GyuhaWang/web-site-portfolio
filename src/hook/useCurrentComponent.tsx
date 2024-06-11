import { componentRefState } from "@/recoil/componentRefSate";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const useCurrentComponent = () => {
    const [activeSection, setActiveSection] = useState<string>();
    const [sectionRefs, setSectionRefs] = useRecoilState(componentRefState);
    useEffect(() => {
      
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
               
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.2 });

        Object.values(sectionRefs).forEach(ref => {
           
            if (ref instanceof HTMLElement) {
                observer.observe(ref);
            }
        });

        return () => {
            Object.values(sectionRefs).forEach(ref => {
                if (ref instanceof HTMLElement) {
                    observer.unobserve(ref);
                }
            });
        };
    }, [sectionRefs]);
    return activeSection;
}

export default useCurrentComponent;