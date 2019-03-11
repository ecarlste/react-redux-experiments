// import _ from 'lodash';

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      // const existingUser = _.find(state, { id: user.id });

      // if (existingUser) {
      //   return [...state.filter(u => u.id !== user.id), ...user];
      // } else {
      //   return [...state, ...user];
      // }

      return [...state, action.payload];

    default:
      return state;
  }
};
