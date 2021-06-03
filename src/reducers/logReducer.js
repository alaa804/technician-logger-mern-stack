import { 
      GET_LOGS , 
      SET_LOADING ,
      LOGS_ERROR , 
      ADD_LOG, 
      DELETE_LOG,
      UPDATE_LOG,
      SET_CURRENT,
      CLEAR_CURRENT,
      SEARCH_LOGS,
      CLEAR_LOGS
    } from '../actions/types';

const initialState = {
    logs : null,
    current : null,
    loading : false,
    error : null
}



export default (state = initialState , action) => {

    const { type , payload } = action;

  switch(type) {
    case SET_LOADING :
        return {
             ...state,
             loading : true
         }
    case GET_LOGS : 
        return {
            ...state,
            logs : payload,
            loading : false
        }
    case ADD_LOG :
        return {
            ...state,
            logs : [payload , ...state.logs],
            loading : false
        }
    case DELETE_LOG :
        return {
            ...state,
            logs :state.logs.filter(log => log.id !== payload),
            loading : false
        }  
    case SEARCH_LOGS :
        return {
            ...state,
            logs : payload
        }
    case CLEAR_LOGS :
        return {
            ...state,
            logs : null
        }    
    case SET_CURRENT : 
        return {
            ...state,
            current :payload
        } 
    case CLEAR_CURRENT :
        return {
            ...state,
            current : null
        }  
    case UPDATE_LOG :
        return {
            ...state,
            logs : state.logs.map(log => log.id === payload.id ? payload : log )
        }               
     case LOGS_ERROR :
         console.error(payload);
        return {
            ...state,
            error : payload
        } 
         default :
     return state;
  }
}