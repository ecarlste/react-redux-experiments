import streams from '../apis/streams';
import { SIGN_OUT, SIGN_IN } from './types';

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
};
