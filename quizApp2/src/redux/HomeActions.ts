export const setLanguage = (lang:string)=>{
    return{
        type:"SET_LANGUAGE",
        payload : lang
    }
}
export const setAnswer = (answer:any)=>{
    return{
        type:"SET_ANSWER",
        payload : answer
    }
}
export const setCorrectAnswer = (answer:any)=>{
    return{
        type:"SET_CORRECT_ANSWER",
        payload : answer
    }
}
export const setResult = (result:any)=>{
    return{
        type:"SET_RESULT",
        payload : result
    }
}
// export const setQuestionData = (data:any)=>{
//     return{
//         type:"SET_QUESTION_DATA",
//         payload : data
//     }
// }
// export const setCurrentQuestion = (data:any)=>{
//     return{
//         type:"SET_CURRENT_QUESTION",
//         payload : data
//     }
// }