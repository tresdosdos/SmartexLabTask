import requestAPI from '../services/requestAPI';

export const getUsers = () => (dispatch) => {
  requestAPI.get('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((res) => {
      dispatch({
        type: 'GET_USERS_SUCCESS',
        data: res
      })
      }
    );
}