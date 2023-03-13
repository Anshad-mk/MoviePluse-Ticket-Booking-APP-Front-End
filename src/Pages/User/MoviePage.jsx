import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import NavBar from '../../Components/User/NavBar';
import { Link } from 'react-router-dom';

import './singlemoviepage.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function valuetext(value) {
    return `${value}°C`;
  }

  
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function BasicGrid() {
  return (
    <>
<NavBar />
    <Box sx={{ flexGrow: 1 }} >
        
      <Grid container spacing={0}>
      
        <Grid item xs={12}>
        
          <Item className='containertop'>
          
          <div className="container">
        <div className="card">
            <div className="img-container">
                <div className="img"></div>
            </div>
            <div className="content">
            <Card sx={{ minWidth: 275, backgroundColor:'black' }}>
      <CardContent>
      <iframe width="850" height="415" src="https://www.youtube.com/embed/o5F8MOz_IDw" title="YouTube video player" 
      
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen></iframe>

        {/* <Typography sx={{ fontSize: 14,  }} color="text.secondary" gutterBottom>
        Choose Number of Seats (9)
        
        </Typography> */}

        {/* <Box sx={{ width: 300 }} 
 marginLeft={35}
 
   >
      <Slider  sx={{boxShadow:5 }} 
        aria-label="Temperature"
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={9}
      />
    </Box> */}
    {/* <Box bgcolor='danger' sx={{  paddingLeft:50, height: 55, width: 60 ,borderRadius:5}} >
    <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38, color:'red' }}  />
          </IconButton>
    </Box> */}
    
      </CardContent>
      <CardActions>
        <Link to={'/SelectTheater'}><Button  size="small"> Book Now </Button></Link> 
      </CardActions>
    </Card>
           
               
            </div>
        </div>
    </div>
          
          </Item>
        </Grid>
       
      </Grid>
    </Box>
    </>
  );
}
