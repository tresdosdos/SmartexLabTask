const initialState = {
  data: []
}

export default function getUsers(state = initialState, action){
  switch(action.type){
    case 'GET_USERS_SUCCESS':{
      return Object.assign({}, state, {data: action.data})
    }
    default:{
      return state;
    }
  }
}