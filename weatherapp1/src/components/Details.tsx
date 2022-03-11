import {useDispatch, useSelector} from 'react-redux'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCurrentWeather } from '../redux/WeatherActions';
import { wrap } from 'module';


const AsteroidInfo = () => {
    type stateType = {
            // countryName:string
            countryData:any 
            WeatherInfo : any
    }
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const countryData = useSelector((state:stateType)=>{
        return state.countryData
    })
   
    // api_key = 784ff8296f19dadd92e4282ed70117d3
    const handleCapitalWeather = async (capitalCity:string)=>{
      const res = await axios.get(`http://api.weatherstack.com/current?access_key=a8816be90374b1c50b1db570c92fc22b&query=${capitalCity}`)
      dispatch(getCurrentWeather(res.data))
      if (res.status === 200) {
        navigate('/capitalweather')
      }
    }
  return (
      <>
    <h1>Country Info</h1>
    <div style = {{display:'flex' , flexWrap:'wrap' , justifyContent:"center" , alignItems:"center"}}>
    {countryData?.map((item:any)=>{
      return(
        <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}}>
        <CardMedia
          component="img"
          height="140"
          image={item.flag}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <span> capital : {item.capital}</span><br></br>
           <span> population : {item.population}</span><br></br>
           <span>  lat : {item.latlng[0]} and lng :{item.latlng[1]}</span><br></br>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>handleCapitalWeather(item.capital)} name = "Capital Weather" role="button">Capital Weather</Button>
        </CardActions>
      </Card>
      )
    })}
    </div>
   
    </>
  )
}
export default AsteroidInfo