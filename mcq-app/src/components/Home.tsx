import TextField from "@mui/material/TextField";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/HomeActions";
// import FormControl from '@mui/material/FormControl';

const Home = () => {
    const [name, setName] = useState("");
    // const [language, setLanguage] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    type stateType = {
        language:string
}
    const language = useSelector((state:stateType)=>state.language)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    };
    const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLanguage(e.target.value))
    };
    console.log(language , "lalalal")
    return (
        <>
        <form  onSubmit={()=>navigate('/quiz')}>

      
        <FormControl>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
                required
            />
            <FormControl style={{ marginTop: "20px" }}>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="female"
                    name="radio-buttons-group"
                    onChange={handleGenderChange}
                >
                    <FormControlLabel value="female" control={<Radio/>} label="Female" />
                    <FormControlLabel value="male" control={<Radio />}  label="Male" />
                </RadioGroup>
            </FormControl>
            <FormControl style={{ marginTop: "20px" }} >
                <FormLabel id="demo-radio-buttons-group-label">language</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label1"
                    // defaultValue="english"
                    name="radio-buttons-group1"
                    onChange={handleLanguageChange}
                >
                    <FormControlLabel
                        value="english"
                        control={<Radio required={true}/>}
                        label="English"
                        aria-required
                    />
                    <FormControlLabel value="hindi" control={<Radio required={true}/>} label="Hindi" aria-required/>
                </RadioGroup>
            </FormControl>
            <Button variant="contained" style={{ marginTop: "20px" }} type="submit" data-testid='startbtn' >
                Start
            </Button>
            </FormControl>
            </form>
        </>
    );
};

export default Home;

