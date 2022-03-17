import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react"
import axios from "axios"
import {useDispatch} from "react-redux"
import {getCountryData} from "../redux/HomeActions"
import {useNavigate} from "react-router-dom"

const Home = ()=>{
	const [countryName , SetCountryname] = useState("")
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const handleSubmit = async ()=>{
		const res = await axios.get(`https://restcountries.com/v2/name/${countryName}`)
		console.log(res.data)
		dispatch(getCountryData(res.data))
		navigate("/countryInfo")
	}
	const handleChange = (e :React.ChangeEvent<HTMLInputElement>)=>{
		SetCountryname(e.target.value)
	}
	return(
		<>
		 <TextField id="standard-basic" label="Standard" variant="standard" onChange = {handleChange} value={countryName} />
		 <Button variant="contained" disabled={countryName === ""} onClick = {handleSubmit}>submit</Button>
		</>
		)
}
export default Home