import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { useDispatch , useSelector} from 'react-redux'
// import {  getAsteroidData, getRandomId } from '../redux/AsteroidActions'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { getCountryInfo } from '../redux/WeatherActions';
// import { getCountryInfo } from '../redux/weatherActions';

const Home = () => {
    const [countryName, setCountryName] = useState("")
//     type stateType = {
//         // countryName:string
//         countryData:any 
// }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setCountryName(event.target.value)
    }
    const handleSubmitClick = async ()=>{
        const res = await axios.get(`https://restcountries.com/v2/name/${countryName}`)
        console.log(res.data)
        dispatch(getCountryInfo(res.data))
        navigate('/countryInfo')  
    }
  return (
    <>
    <h2>Landing page is here</h2>
    <TextField id="standard-basic" variant="standard"   placeholder='Enter country' value={countryName} onChange={handleChange}/>
    <Button variant="contained" disabled={countryName === ""} onClick={handleSubmitClick}>submit</Button>
    </> 
  )
}
export default Home