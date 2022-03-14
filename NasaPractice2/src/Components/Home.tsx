import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {setRandomId , setAsteroidData} from "../Redux/HomeActions"
import {useDispatch , useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import axios from "axios"


const Home =()=> {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	type stateType = {
		RandomId : string
		AsteroidData:any
	}
	const id = useSelector((state: stateType    )=>state.RandomId)
	
	const handleSubmitClick = async ()=>{
		const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=yQj2VC9NLN6wFI1o6yt1Wi6mciwpFZCN06IQ8kdf`)
        dispatch(setAsteroidData(res.data))
        navigate('/asteroidinfo')  
	}
	const HandleOnChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
		dispatch(setRandomId(e.target.value))
	}
	const handleRandomClick = async ()=>{
		 const randomIndex = Math.floor((Math.random() * 20) + 1);
        const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=yQj2VC9NLN6wFI1o6yt1Wi6mciwpFZCN06IQ8kdf`)
        dispatch(setRandomId( res.data.near_earth_objects[randomIndex].id)) 
	}
  return (
    <>
    	 <TextField id="outlined-basic" label="Enter Asteroid ID" onChange = {HandleOnChange} value={id || ""} variant="outlined" />
    	 <Button variant="contained" onClick={handleSubmitClick} disabled={!id}>Submit</Button>
    	 <Button variant="contained" onClick={handleRandomClick}>Random Id</Button>
    </>
  );
}

export default Home;