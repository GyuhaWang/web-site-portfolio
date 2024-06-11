import { css } from "@emotion/react";

const ParticipantBox = ({children}: {children: number}) => {
    return <div css ={css`
    border-radius: 4px;
    background-color: #EEEEEE;
    padding:4px 6px 2px 6px ;
    color:#A91D3A;
    display: inline-block;
    font-size:12px;
    font-weight: bold
    `}>
{children>1? `팀 ${children}명`: '개인'}
    </div>
}
export default ParticipantBox;