const initialState = {
    language : "",
    answers:["","","","",""],
    correctAnswers :[],
    result:0,
}
type Action={
    type:string,
    payload:any
}

const HomeReducer = (state =initialState, action:Action)=>{
    switch (action.type) {
        case "SET_LANGUAGE":
            return{
                ...state,
                language : action.payload
            }
        case "SET_ANSWER":
            return{
                ...state,
                answers : action.payload
            }
        case "SET_CORRECT_ANSWER":
            return{
                ...state,
                correctAnswers  : action.payload
            }
        case "SET_RESULT":
            return{
                ...state,
                result : action.payload
            }
        default:
            return{
                state
            }
    }

}

export default HomeReducer