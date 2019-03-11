import JSONPlaceholder from '../clients/JSONPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await JSONPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response
  });
};
