const initialState = {
    data:[],
    rawJson : {}
}
type Action = {
    type:string
    payload:any
}
type stateType = {
    data:any[]
    rawJson:any 
}

const HomeReducer = (state : stateType = initialState , action:Action)=>{
    
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
        default: return state       
    }
}
export default HomeReducer