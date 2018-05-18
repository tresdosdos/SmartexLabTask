import requestAPI from '../services/requestAPI';

export const getUsers = () => (dispatch) => {
  requestAPI.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((res) => {
      dispatch({
        type: 'GET_USERS_SUCCESS',
        data: res
      })
      })
    .catch((err) => {
      console.log(err.message);
      if (err.message === 'Failed to fetch'){
        dispatch({
          type: 'FAILED_TO_FETCH',
          message: 'Sorry, failed to fetch. Check your internet connection'
        })
      }
    })

}