import styled,{css} from "styled-components/native";

export default {
    SignInModal : styled.Modal(()=>css``),
    View : styled.View(()=>css`
        flex-direction: column;
        gap: 10px;
        height: 100%;
        justify-content: center;
        padding: 10%;
    `),
    Title : styled.Text(()=>css`
        font-size: 30px;
        text-align: center;
        margin-bottom: 10px;
    `)
}