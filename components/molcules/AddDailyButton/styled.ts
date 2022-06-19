import styled, {css} from 'styled-components/native';

const Styled = {
  AddDailyButton: styled.View(
    () => css`
      background-color: red;
      width: 20px;
      height: 20px;
      position: absolute;
      bottom: 0;
      right: 10px;
    `,
  ),
};

export default Styled;
