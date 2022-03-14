
export const getCountryInfo = (data:any)=>{
    // debugger
    return{
        type:"GET_COUNTRY_INFO",
        payload : data ,
    }
}
export const getCurrentWeather = (weatherData:any)=>{

    return{
        type:"GET_WEATHER_DATA",
        payload : weatherData ,
    }
}