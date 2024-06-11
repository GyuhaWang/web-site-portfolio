import { css } from "@emotion/react"
import { ReactElement } from "react";

const BouncingButton = ({child, action}:{child: ReactElement, action: ()=> void})=>{
return (
<div >
<div css={css` cursor: pointer;
    animation: bounce 2s infinite;
  
    bottom: 20px;
   
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }`}
  
    > 
   {child}
   </div>
</div>

)
}

export default BouncingButton;