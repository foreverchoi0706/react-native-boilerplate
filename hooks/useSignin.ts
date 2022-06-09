import {useMutation} from 'react-query';
import Toast from 'react-native-toast-message';
import {singIn} from '../api/account';

const useSignIn = () => {
  return useMutation(singIn, {
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: '지원완료!',
        text2: '설정 -> 마이페이지에서 확인가능합니다.',
      });
    },
  });
};

export default useSignIn;
