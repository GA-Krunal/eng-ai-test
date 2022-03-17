import {useSelector , useDispatch} from "react-redux"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {getCurrentWeather} from "../redux/HomeActions"


const CountryInfo = ()=>{

	const navigate = useNavigate();
	const dispatch = useDispatch();
	type stateType = {
		countryInfo: any[]
	}
	const countryInfo = useSelector((state:stateType)=>state.countryInfo)
	// console.log(countryInfo)
const handleClick = async (capital:string)=>{
const res = await axios.get(`http://api.weatherstack.com/current?access_key=a8816be90374b1c50b1db570c92fc22b&query=${capital}`)
      dispatch(getCurrentWeather(res.data))
      if (res.status === 200) {
        navigate('/weatherInfo')
      }
}
	return(
	  <>
    <h1>Country Info</h1>
    <div style = {{display:'flex' , flexWrap:'wrap' , justifyContent:"center" , alignItems:"center"}}>
    {countryInfo?.map((item:any , index:any)=>{
      return(
        <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}} key={index}>
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
          <Button onClick={()=>handleClick(item.capital)} name = "Capital Weather" role="button">Capital Weather</Button>
        </CardActions>
      </Card>
      )
    })}
    </div>
   
    </>
		)
}
export default CountryInfo