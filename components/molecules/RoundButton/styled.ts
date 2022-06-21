import styled, {css} from 'styled-components/native';

const Styled = {
  RoundButton: styled.TouchableOpacity<{bgColor: string}>(
    ({bgColor}) => css`
      padding: 20px 50px;
      background-color: ${bgColor};
      border-radius: 30px;
      justify-content: center;
      align-items: center;
    `,
  ),
  InnerText: styled.Text(
    () => css`
      font-size: 15px;
      color: #ffffff;
      font-weight: bold;
    `,
  ),
};

export default Styled;
