export const initialStore = () => {
  return {
    message: null,
    personajes: [],
    loading: false,
    error: null,
    planetas:[],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type) {
    case 'GET_PERSONAJES_LOADING':
      return {
        ...store,
        loading: true,
        error: null
      }
      
    case 'GET_PERSONAJES_SUCCESS':
      return {
        ...store,
        personajes: action.payload,
        loading: false,
        error: null
      }
    
    case 'GET_PERSONAJES_ERROR':
      return {
        ...store,
        error: action.payload,
        loading: false
      }
    case 'Get_Planets':
      return{
        ...store,planetas: action.payload,
      }
    default:
      return store;
  }    
}