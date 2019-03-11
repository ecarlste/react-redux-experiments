import { SIGN_OUT, SIGN_IN } from './types';

export const signIn = () => ({
  type: SIGN_IN
});

export const signOut = () => ({
  type: SIGN_OUT
});
