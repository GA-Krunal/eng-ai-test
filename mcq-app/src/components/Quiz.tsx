import { Button } from "@mui/material"
import { AnyPtrRecord } from "dns"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import questionList from "../Question"
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { setAnswer, setCorrectAnswer, setResult } from "../redux/HomeActions"
import { useNavigate } from "react-router-dom"
import { width } from "@mui/system"
// import Button from "@mui/material/Button";
const Quiz = () => {
  console.log(questionList)
  console.log(questionList.english)
  console.log(questionList.hindi)
  const [index, setIndex] = useState(0)
  const [temp, setTemp] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState<any>({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState<any>([])
  // const [ansArr, setAnsArr] = useState<any>(["" , "" , "" , "" , ""])
  type stateType = {
    language: string
    state:{
      answers:any,
    }
    correctAnswers:any

  }
  const language = useSelector((state: stateType) => state.language)
  const answers = useSelector((state: stateType) => state.state.answers)
  const correctAnswers = useSelector((state: stateType) => state.correctAnswers)
  // console.log(correctAnswers);
  useEffect(() => {
    if (language === "english") {
      setData(questionList.english)
      setCurrentQuestion(data[0])
    } else {
      setData(questionList.hindi)
      setCurrentQuestion(data[0])
    }
    const arr =data.map((item:any) =>{ 
      return item.Answer
     })
      dispatch(setCorrectAnswer(arr))
  }, [language, data] )
  
  const handleAnswerChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setTemp(!temp)
    dispatch(setAnswer(answers.splice(index , 1 ,e.target.value)))
  }
 useEffect(() => {
  setCurrentQuestion(data[index])
 }, [index])
 const handleFinish = ()=>{
  const filteredArray =answers.filter((value:any) => correctAnswers.includes(value));
  dispatch(setResult(filteredArray.length))
  navigate('/result')
 }
 console.log(index , answers[index] , "ooyoyoyoyo")
  return (
    <>
    <h1>Quiz</h1>
    <div style={{ display:"flex" , alignItems:"center", justifyContent :"space-between", width:"40%"}}>
      <Button variant="contained" style={{backgroundColor: answers[0] === "" ? "red":"grey"}}  onClick={() =>setIndex(0)}>1</Button>
      <Button variant="contained"style={{backgroundColor: answers[1] === "" ? "red":"grey"}}  onClick={() =>setIndex(1)}>2</Button>
      <Button variant="contained" style={{backgroundColor: answers[2] === "" ? "red":"grey"}}  onClick={() =>setIndex(2)}>3</Button>
      <Button variant="contained"style={{backgroundColor: answers[3] === "" ? "red":"grey"}} onClick={() =>setIndex(3)}>4</Button>
      <Button variant="contained" style={{backgroundColor: answers[4] === "" ? "red":"grey"}}  onClick={() =>setIndex(4)}>5</Button>
      </div>
      <h2>{currentQuestion?.question}</h2>
      <FormControl style={{ marginTop: "20px" }}>
        <FormLabel id="demo-radio-buttons-group-label">options</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={answers[index]}
          name="radio-buttons-group"
        onChange={handleAnswerChange}
        >
          {currentQuestion?.options?.map((item: any , index:any) => {
            return (
              // checked={answers.includes(item)}
              <FormControlLabel key = {index} value={item} control={<Radio />} label={item} />
            )
          })}
        </RadioGroup>
      </FormControl>
      {index === 4?  <Button variant="contained" style={{ marginTop: "20px" }} onClick={handleFinish}>Finish</Button>:null}
    </>
  )
}

export default Quiz