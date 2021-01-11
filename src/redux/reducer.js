const initialState = {
    movieList: [],
    addBtn:false,
    editBtn:false,
    searchName:'',
    searchRate:1
}

const Reducer =(state=initialState, action)=>{


   switch (action.type) {
       case "DISPLAY":
           return {
               ...state,
               movieList:action.payload
           }
        
           case "ADD_BTN":
               return{
                   ...state,
                   addBtn:!state.addBtn
               }
            
            case "ADD":
                return{
                    ...state,
                    movieList:[...state.movieList,action.payload]
                }
            
            
            case"DELET":
            return{
                ...state,
                movieList: state.movieList.filter(el=> action.payload!== el._id)
            }
            case "EDIT_BTN":
               return{
                   ...state,
                   editBtn:!state.editBtn
               }

            case"EDIT":
            return{
                ...state,
                movieList: state.movieList.map(el=> action.payload.ID=== el._id?   action.payload.newInput : el)
            }
            case "SEARCH_NAME":
               return{
                   ...state,
                   searchName:action.payload
               }
            case "SEARCH_RATE":
                console.log(action.payload)
               return{
                   ...state,
                   searchRate:action.payload
               }
      
           
           
   
       default:
           return state 
          
   }
}
export default Reducer