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
      console.log(result , "result")
  return (
      <>
      <h2>Test Result</h2>
      <div style={{width:"30%"}}>

       <PieChart
       
  data={[
    { title: 'Correct', value: result, color: '#E38627' },
    { title: 'Incorrect', value: (5 - result), color: '#C13C37' },
    // { title: 'Three', value: 20, color: '#6A2135' },
  ]}
  label={({ dataEntry }) => dataEntry.title}
/>
      </div>
      </>
  )
}

export default Result