import { componentRefState } from "@/recoil/componentRefSate";
import { useRecoilValue } from "recoil";

export const useScroll = () => {
    const componets = useRecoilValue(componentRefState);
  
    const moveToComponent = (key:string) => {
        componets[key]?.scrollIntoView({ behavior: 'smooth' });
    };
  
    return moveToComponent;
  };