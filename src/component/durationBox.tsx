import { css } from "@emotion/react"
import { ReactElement } from "react"

const DurationBox = ({children}: {children: string}) => {
    return <div css ={css`
    border-radius: 4px;
    background-color: #EEEEEE;
    padding:4px 6px 2px 6px ;
    color:#A91D3A;
    display: inline-block;
    font-size:12px;
    font-weight: bold
    `}>
{children}
    </div>
}
export default DurationBox;