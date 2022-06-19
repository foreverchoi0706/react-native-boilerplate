import styled, {css} from 'styled-components/native';

export default {
  FormInput: styled.View(
    () => css`
      border: 1px solid lightgray;
      padding: 20px 10px;
      border-radius: 5px;
    `,
  ),
  ErrorText: styled.Text(() => css``),
};
