const initialState = {
  goods: [],
}

export const addGoodReducer = (state = initialState, action) => {
  console.log('[action]:', action)

  switch(action.type) {
    case 'ADD':
      return {

      }
    default:
      return state
  }
}


// export const copyListReducer = (state = initialState, action) => {
//   console.log('[action]:', action)

//   switch(action.type) {
//     case 'COPY':

//       function getList() {
        
//       }

//       return {
//         ...state, 
//         copyText: getList(state)
//       }
//     default: 
//       return state
//   } 
// }

// export const deleteElementReducer = (state = initialState, action) => {
//   console.log('[action]:', action)

//   switch(action.type) {
//     case 'DELETE':
//       return {

//       }
//     default: 
//       return state
//   } 
// }

