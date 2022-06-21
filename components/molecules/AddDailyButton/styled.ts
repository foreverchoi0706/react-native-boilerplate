import styled, {css} from 'styled-components/native';

const Styled = {
  AddDailyButton: styled.TouchableOpacity(
    () => css`
      position: absolute;
      right: 10px;
      bottom: 80px;
      z-index: 999;
      background-color: coral;
      border-radius: 30px;
      width: 60px;
      height: 60px;
      justify-content: center;
      align-items: center;
    `,
  ),
  InnerText: styled.Text(
    () => css`
      font-size: 30px;
      color: #ffffff;
    `,
  ),
};

export default Styled;
