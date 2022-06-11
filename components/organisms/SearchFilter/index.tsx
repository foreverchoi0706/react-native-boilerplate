import React, {Dispatch, memo, useCallback, VFC} from 'react';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import FormInput from '../../molcules/FormInput';
import Form from '../../Form';
import Styled from './styled';

interface IProps {
  setArr: Dispatch<React.SetStateAction<number[]>>;
}

const SearchFilter: VFC<IProps> = ({setArr}) => {
  const handleSubmitEditing = useCallback(
    ({
      nativeEvent: {text},
    }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      setArr(arr => {
        return arr.filter(item => item > +text);
      });
      console.log(text);
    },
    [setArr],
  );

  return (
    <Styled.SearchFilter>
      <Form
        defaultValues={{
          keyword: '',
        }}>
        <FormInput
          name="keyword"
          placeholder="keyword"
          onSubmitEditing={handleSubmitEditing}
        />
      </Form>
    </Styled.SearchFilter>
  );
};

export default memo(SearchFilter);
