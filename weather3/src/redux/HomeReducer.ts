const initialState = {
	countryInfo:[],
	weatherInfo:{}
}
type Action = {
	type:string,
	payload:any
}

const HomeReducer = (state = initialState , action:Action)=>{
	switch(action.type){
		case "GET_DATA":
		return{
				...state,
				countryInfo:action.payload
		}
		case "GET_WEATHER_DATA":
		return{
				...state,
				weatherInfo:action.payload

		}
		default : return state

	}

}

export default HomeReducer;