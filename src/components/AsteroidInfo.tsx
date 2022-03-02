import {useSelector} from 'react-redux'

const AsteroidInfo = () => {
    type stateType = {
            id:string
            randomAteroidData:any 
    }
    const randomAteroidData = useSelector((state:stateType)=>{
        return state.randomAteroidData
    })
  return (
      <>
    <h1>AsteroidInfo</h1>
    <h2>{randomAteroidData?.name}</h2>
    <h3>{randomAteroidData?.nasa_jpl_url}</h3>
    <h3>{randomAteroidData?.is_potentially_hazardous_asteroid? "false" : "true"}</h3>
    </>
  )
}
export default AsteroidInfo