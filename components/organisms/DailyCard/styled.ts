import styled, {css} from 'styled-components/native';

export default {
  DailyCard: styled.View(
    () => css`
      border: 1px solid lightgray;
      padding: 20px;
      margin: 5px 10px;
      border-radius: 5px;
    `,
  ),
};
