export const getTableData = (data:any) =>{
    return{
        type: "GET_DATA",
        payload: data
    }
}
export const getRawJson = (data:any) =>{
    return{
        type: "GET_RAW_JSON",
        payload: data
    }
}
