import React from 'react'
import {useSelector} from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CapitalWeather = () => {
    type stateType = {
        // countryName:string
        countryData:any 
        WeatherInfo : any
}
    const WeatherInfo = useSelector((state:stateType)=>{
        return state.WeatherInfo
    })
    console.log(WeatherInfo , "krunal patel")
  return (
      <>
        <h3>Weather of {WeatherInfo?.location.name}</h3>
    <div style = {{display:'flex' , flexWrap:'wrap' , justifyContent:"center" , alignItems:"center"}}>
    <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}}>
    <CardMedia
      component="img"
      height="140"
      image={WeatherInfo?.current.weather_icons[0]}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       <span> temperature : {WeatherInfo?.current.temperature}</span><br></br>
       <span> wind_speed : {WeatherInfo?.current.wind_speed}</span><br></br>
       <span>  Precip : {WeatherInfo?.current.precip} </span><br></br>
      </Typography>
    </CardContent>
    <CardActions>
      {/* <Button onClick={()=>handleCapitalWeather(item.capital)}>Capital Weather</Button> */}
    </CardActions>
  </Card>
  </div>
  </>
  )
}

export default CapitalWeather