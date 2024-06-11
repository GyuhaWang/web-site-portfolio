import { css } from "@emotion/react"
import Image from "next/image";
import {  useState } from "react"

const ImageBox = ({src, title, size = 'medium'}:{src:string, title:string, size?: 'small' | 'medium' | 'large' }) => {
    const [isHovered, setIsHovered] = useState(false);
     const componentSize = {
        small:40,
        medium: 80,
        large: 120
      }
      const imageSize = componentSize[size];
    return  (<div css={css`
    position:relative;
    padding: 12px;
    background-color: #c5c6c7;
    border-radius:100%;
    color:black;
   `}
   
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
   >
    <Image src={src} alt={""} width={imageSize} height={imageSize}/>
                <div css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius:100%;
                    height:${isHovered?'100%':'0%'};
                    transition: height 0.1s ease-in;
                    
                `}>
                    <span css={css`
                        color: white;
                        font-size: 1rem;
                        text-transform:uppercase;
                          visibility:${isHovered?'visible':'hidden'};
                    `}>{title}</span>
                </div>
          
   </div>)
}

export default ImageBox;