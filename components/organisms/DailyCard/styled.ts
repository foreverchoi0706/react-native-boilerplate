import styled, {css} from 'styled-components/native';

export default {
  DailyCard: styled.View(
    () => css`
      padding: 5px;
      margin-top: 5px;
    `,
  ),
  Temp: styled.TouchableOpacity(
    () => css`
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 50px 20px;
    `,
  ),
};
