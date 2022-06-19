import styled, {css} from 'styled-components/native';

export default {
  DailyCard: styled.View(
    () => css`
      border: 1px solid lightgray;
      padding: 20px;
      margin-top: 5px;
      border-radius: 5px;
    `,
  ),
};
