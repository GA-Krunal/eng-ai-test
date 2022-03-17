import {useSelector} from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WeatherInfo = ()=>{

	 type stateType = {
        countryData:any 
        weatherInfo : any
}
    const weatherInfo = useSelector((state:stateType)=>{
        return state.weatherInfo
    })
    console.log(weatherInfo)

	return(
		<>
		   <h3>weather of {weatherInfo?.location.name}</h3>
    <div style = {{display:'flex' , flexWrap:'wrap' , justifyContent:"center" , alignItems:"center"}}>
    <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}}>
    <CardMedia
      component="img"
      height="140"
      image={weatherInfo?.current.weather_icons[0]}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       <span> temperature : {weatherInfo?.current.temperature}</span><br></br>
       <span> wind_speed : {weatherInfo?.current.wind_speed}</span><br></br>
       <span>  Precip : {weatherInfo?.current.precip} </span><br></br>
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
export default WeatherInfo