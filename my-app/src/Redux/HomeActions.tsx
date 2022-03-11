export const setRandomId = (id:string)=>{
	return{
		type:"SET_RANDOM_ID",
		payload:id
	}
}
export const setAsteroidData = (data:any)=>{
	return{
		type:"SET_ASTEROID_DATA",
		payload:data
	}
}