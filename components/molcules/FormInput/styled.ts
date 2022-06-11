import styled, {css} from 'styled-components/native';

export default {
  FormInput: styled.View(
    () => css`
      border: 1px solid lightgray;
      border-radius: 5px;
    `,
  ),
  ErrorText: styled.Text(() => css``),
};
