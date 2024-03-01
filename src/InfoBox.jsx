import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FlareIcon from '@mui/icons-material/Flare';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({ info }){
    const INIT_URL ="https://images.unsplash.com/photo-1608067826981-81dc1360e9b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   
    const HOT_URL ="https://images.unsplash.com/photo-1616259299671-d8b82928ab64?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1608905978123-558c415998e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            
        <div 
         className='Container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      
        component="img"
        alt="green iguana"
        height="140"
        image={
            info.humidity > 80
             ? RAIN_URL 
             : (info.temp > 15 
            ? HOT_URL 
            : COLD_URL) 
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city} {'\t'}
            {
            info.humidity > 80
             ? <ThunderstormIcon />
             : (info.temp > 15 
            ? <FlareIcon />
            : <AcUnitIcon /> ) 
        }
        </Typography>
        <Typography  
        variant="body2" color="text.secondary"  component={"span"} >
         
            <p >
                Temprature = {info.temp}&deg;C
            </p>
            <p>
                Humidity = {info.humidity}
            </p>
            <p> 
                Min Temp = {info.tempMin}&deg;C
            </p>
            <p>
                Max Temp = {info.tempMax }&deg;C
            </p>
            <p>
                The weather can be described as as  <i><b>{info.weather}</b></i>  feels like = {info.feelslike}&deg;C
            </p>

        </Typography>
      </CardContent>
      
    </Card>
          </div>
        </div>
    )
};  