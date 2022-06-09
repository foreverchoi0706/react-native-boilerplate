import instance from './instance';

export const singIn = (signInInfo: ISignInInfo) => {
  console.log(signInInfo);
  console.log(instance);
  return Promise.resolve(true);
};
