import {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Callback,
  CallbackWithResult,
} from '@react-native-async-storage/async-storage/src/types';

const useAsyncStorage = () => {
  const getStorage = useCallback(
    async (key: string, callback?: CallbackWithResult<string>) => {
      return await AsyncStorage.getItem(key, callback);
    },
    [],
  );

  const setStorage = useCallback(
    async (key: string, value: any, callback?: Callback) => {
      await AsyncStorage.setItem(key, JSON.stringify(value), callback);
    },
    [],
  );

  const removeStorage = useCallback(
    async (key: string, callback?: Callback) => {
      await AsyncStorage.removeItem(key, callback);
    },
    [],
  );

  const clearStorage = useCallback((callback?: Callback) => {
    AsyncStorage.clear(callback);
  }, []);

  return {
    getStorage,
    setStorage,
    removeStorage,
    clearStorage,
  };
};

export default useAsyncStorage;
