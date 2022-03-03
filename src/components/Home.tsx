import React, { useState , useEffect } from 'react'
import axios from 'axios'
import { useDispatch , useSelector} from 'react-redux'
import {  getAsteroidData, getRandomId } from '../redux/AsteroidActions'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Home = () => {
    type stateType = {
            id:string
            randomAteroidData:object
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useSelector((state:stateType)=>{
        return state.id
    })
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(getRandomId(event.target.value)) 
    }
    const handleSubmitClick = async ()=>{
        const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=yQj2VC9NLN6wFI1o6yt1Wi6mciwpFZCN06IQ8kdf`)
        dispatch(getAsteroidData(res.data))
        navigate('/asteroidinfo')  
    }
    const handleRandomClick = async ()=>{
        const randomIndex = Math.floor((Math.random() * 20) + 1);
        console.log(randomIndex);
        const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=yQj2VC9NLN6wFI1o6yt1Wi6mciwpFZCN06IQ8kdf`)
        dispatch(getRandomId( res.data.near_earth_objects[randomIndex].id)) 
    }
  return (
    <>
    <h2>Landing page is here</h2>
    <TextField id="standard-basic" variant="standard"   placeholder='Enter Asteroid ID' value={id || ""} onChange={handleChange}/>
    <Button variant="contained" disabled={!id} onClick={handleSubmitClick}>submit</Button>
    <Button variant="contained" color='success' onClick={handleRandomClick}>Random Asteroid</Button>
    </> 
  )
}
export default Home