const initialState = {
    data:[],
    rawJson : {}
}
type Action = {
    type:string
    payload:any
}

const HomeReducer = (state = initialState , action:Action)=>{
    
    switch (action.type) {
        case "GET_DATA":
            return{
                ...state,
                data:  state.data ?[...state.data , ...action.payload]: action.payload  
            }
        case "GET_RAW_JSON":
            return{
                ...state,
               rawJson:action.payload
            }
        default: return  state

           
    }
}
export default HomeReducer