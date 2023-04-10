import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
let date=["01-FEB","02-FEB","03-FEB","04-FEB","05-FEB","06-FEB","07-FEB","08-FEB","10-F"]
export default function ScrollableTabsButtonAuto(props) {
  // console.log(props)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className='bg-[#ffeded]'>
     <Box sx={{ maxWidth: { xs: 320, sm: 480 }  }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        indicatorColor='secondary'
      >
        {date.map((date,index)=> <Tab label={date} key={index}  />)}
        
      </Tabs>
    </Box>
   </div>
  );
}