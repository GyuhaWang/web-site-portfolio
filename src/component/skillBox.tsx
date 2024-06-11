import { css } from "@emotion/react"
import { ReactElement } from "react"

const SkillBox = ({children}: {children: string}) => {
    return <div css ={css`
    border-radius: 4px;
    background-color: #EEEEEE;
    padding:4px 6px 2px 6px ;
    color:black;
    // display: inline-block;
    word-wrap:break-word;
    font-size:0.8rem;
    font-weight: bold
    `}>
{children}
    </div>
}
export default SkillBox;