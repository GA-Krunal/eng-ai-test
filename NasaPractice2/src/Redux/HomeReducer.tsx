const initialState = {
	RandomId : "",
	AsteroidData :{}
}
type Action={
	type:string,
	payload:any
}
const HomeReducer = (state = initialState , action:Action)=>{
	switch(action.type){
		case "SET_RANDOM_ID" :
		return{
			...state,
			RandomId:action.payload
		}
		case "SET_ASTEROID_DATA" :
		return{
			...state,
			AsteroidData:action.payload
		}
		default:return state
	}

}

export default HomeReducer;