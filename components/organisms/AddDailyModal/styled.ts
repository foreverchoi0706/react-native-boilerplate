import styled, {css} from 'styled-components/native';

const Styled = {
  AddDaily: styled.SafeAreaView(
    () => css`
      padding: 0 10px;
      height: 100%;
    `,
  ),
  InnerTitle: styled.Text(
    () => css`
      font-size: 25px;
      height: 5%;
      text-align: center;
      margin-bottom: 10px;
    `,
  ),
  ScrollFormContainer: styled.ScrollView(
    () => css`
      padding: 0 10px;
      flex-grow: 1;
    `,
  ),
  ButtonContainer: styled.View(
    () => css`
      height: 10%;
      flex-direction: row;
      justify-content: space-around;
    `,
  ),
};

export default Styled;
