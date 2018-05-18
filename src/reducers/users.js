const initialState = {
  data: [],
  error: ''
}

export default function getUsers(state = initialState, action){
  switch(action.type){
    case 'GET_USERS_SUCCESS':{
      return Object.assign({}, state, {data: action.data})
    }
    case 'FAILED_TO_FETCH':{
      return Object.assign({}, state, {error:  action.message})
    }
    default:{
      return state;
    }
  }
}