type Action = {
    type:string
    payload:any
}
const initialState = {
    countryData:[] , 
    WeatherInfo:{}
}
// type stateType = {
//     countryData:any
//     WeatherInfo:any
// }

const WeatherReducer = (state =initialState, action: Action) =>{
    // debugger
    switch (action.type) {
        case "GET_COUNTRY_INFO":
            return{
                ...state,
                countryData:action.payload
            }
        case "GET_WEATHER_DATA":
            return{
                ...state,
                WeatherInfo:action.payload
            }
        default:
            return state
    }
}
export default WeatherReducer;