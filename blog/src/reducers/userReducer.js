import _ from 'lodash';

export default (state = [], { type, payload: user }) => {
  switch (type) {
    case 'FETCH_USER':
      const existingUser = _.find(state, { id: user.id });

      if (existingUser) {
        return [...state.filter(u => u.id !== user.id), user];
      } else {
        return [...state, user];
      }

    default:
      return state;
  }
};
