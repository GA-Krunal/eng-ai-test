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
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom"
import { width } from "@mui/system"
// import Button from "@mui/material/Button";
const Quiz = () => {
 
  const [index, setIndex] = useState<number>(0)
  const [temp, setTemp] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState<any>({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState<any>([])
  const [tempArr, setTempArr] = useState<any>([])
  const [selected, setSelected] = useState<any>([])
  // let tempArr:string[] = [];
  let tempStr: string;
  // const [ansArr, setAnsArr] = useState<any>(["" , "" , "" , "" , ""])
  type stateType = {
    language: string
    state: {
      answers: any,
    }
    correctAnswers: any

  }
  const language = useSelector((state: stateType) => state.language)
  const answers = useSelector((state: stateType) => state.state.answers)
  const correctAnswers = useSelector((state: stateType) => state.correctAnswers)
 
  useEffect(() => {
    if (language === "english") {
      setData(questionList.english)
      setCurrentQuestion(data[0])
    } else {
      setData(questionList.hindi)
      setCurrentQuestion(data[0])
    }
    const arr = data.map((item: any) => {
      return item.Answer
    })
    dispatch(setCorrectAnswer(arr))
  }, [language, data])

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    setTemp(!temp)
    dispatch(setAnswer(answers.splice(index, 1, e.target.value)))
  }
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newArray = [...selected, e.target.value];
    if (selected.includes(e.target.value)) {
      newArray = newArray.filter((value) => value !== e.target.value);
    }
    setSelected(newArray);
  }
 

  useEffect(() => {
    setCurrentQuestion(data[index])
  }, [index])
 
  const handleFinish = () => {
    dispatch(setAnswer(answers.splice(4, 1, selected)))
 
    const filteredArray = answers.filter((value: any) => {
      if( correctAnswers.includes(value)){
        return value
      }
    })
    let correctCount = filteredArray.length
  
   if (answers[4].length ===2) {
    
     if (answers[4].indexOf(correctAnswers[4][0]) !== -1) {
     
       if (answers[4].indexOf(correctAnswers[4][1]) !== -1){
      
        correctCount = correctCount + 1;
       }
     }
     
   }
 
  
    dispatch(setResult(correctCount))
    navigate('/result')
  }
 

  
  return (
    <>
      <h1>Quiz</h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "40%" }}>
        <Button variant="contained" style={{ backgroundColor: answers[0] === "" ? "red" : "grey" }} onClick={() => setIndex(0)}>1</Button>
        <Button variant="contained" style={{ backgroundColor: answers[1] === "" ? "red" : "grey" }} onClick={() => setIndex(1)}>2</Button>
        <Button variant="contained" style={{ backgroundColor: answers[2] === "" ? "red" : "grey" }} onClick={() => setIndex(2)}>3</Button>
        <Button variant="contained" style={{ backgroundColor: answers[3] === "" ? "red" : "grey" }} onClick={() => setIndex(3)}>4</Button>
        <Button variant="contained" style={{ backgroundColor: answers[4] === "" ? "red" : "grey" }} onClick={() => setIndex(4)}>5</Button>
      </div>
      <h2>{currentQuestion?.question}</h2>
      <FormControl style={{ marginTop: "20px" }}>
        <FormLabel id="demo-radio-buttons-group-label">options</FormLabel>
        {index === 4 ? currentQuestion?.options?.map((item: any, val: any) => {
          return <FormControlLabel key={val} control={<Checkbox onChange={handleCheckboxChange} />} checked={selected.indexOf(item)!==-1} value={item} label={item} />
        }) :
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={answers[index]}
            name="radio-buttons-group"
            onChange={handleAnswerChange}
          >
            {currentQuestion?.options?.map((item: any, val: any) => {
              return (
                <FormControlLabel key={val} value={item} control={<Radio />} label={item} />
              )
            })}
          </RadioGroup>}
      </FormControl>
      {index === 4 ? <Button variant="contained" style={{ marginTop: "20px" }} onClick={handleFinish}>Finish</Button> : null}
    </>
  )
}

export default Quiz