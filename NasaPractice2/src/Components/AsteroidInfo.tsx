import{ useSelector} from "react-redux"
const AsteroidInfo =()=> {
	type stateType = {
		RandomId : string
		AsteroidData:any
	}
	const AsteroidData = useSelector((state: stateType    )=>state.AsteroidData)
  return (
    <>
    <h1>AsteroidInfo</h1>
    <h2>{AsteroidData?.name}</h2>
    <h3>{AsteroidData?.nasa_jpl_url}</h3>
    <h3>{AsteroidData?.is_potentially_hazardous_asteroid? "true" : "false"}</h3>
    </>
  );
}

export default AsteroidInfo;