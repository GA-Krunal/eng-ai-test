type Action = {
    type:string
    payload:any
}
const initialState = {
    id : "0",
    randomAteroidData:{}
}

const AsteroidReducer = (state=initialState, action:Action) =>{
    // debugger
    switch (action.type) {
        case "GET_RANDOM_ID":
            return{
                ...state,
             id:action.payload
            }
        case "GET_DATA":
            return{
                ...state,
                randomAteroidData:action.payload
            }
        default:
            return{
                state
            }
    }
}
export default AsteroidReducer;