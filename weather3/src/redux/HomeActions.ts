export const getCountryData = (data:any)=>{
	return{
		type:"GET_DATA",
		payload:data
	}
}

export const getCurrentWeather = (data:any)=>{
	return{
		type:"GET_WEATHER_DATA",
		payload:data
	}
}