
export const getRandomId = (id:string)=>{
    // debugger
    return{
        type:"GET_RANDOM_ID",
        payload : id ,
    }
}
export const getAsteroidData = (data:any)=>{

    return{
        type:"GET_DATA",
        payload : data ,
    }
}