import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';

const Result = () => {
    type stateType = {
        language: string
        state:{
          answers:any,
        }
        correctAnswers:any
        result:number
    
      }
      const result = useSelector((state: stateType) => state.result)
    
  return (
      <>
      <h2>Test Result</h2>
      <div style={{width:"30%"}}>

       <PieChart
       
  data={[
    { title: 'Correct', value: result, color: '#E38627' },
    { title: 'Incorrect', value: (5 - result), color: '#C13C37' },
   
  ]}
labelStyle={{
fontSize: "4px",
fill: "#000",
}}
  label={(props) => {
    return props.dataEntry.value !== 0 ?`${props.dataEntry.title} ${Math.round(props.dataEntry.percentage)}%`: null;
  }}
/>
      </div>
      </>
  )
}

export default Result