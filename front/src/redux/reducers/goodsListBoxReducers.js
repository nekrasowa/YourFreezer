const initialState = {
  copyText: ''
}

export const copyListReducer = (state = initialState, action) => {
  console.log('[action]:', action)

  switch(action.type) {
    case 'COPY':

      function getList() {
        
      }

      return {
        ...state, 
        copyText: getList(state)
      }
    default: 
      return state
  } 
}