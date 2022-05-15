import { Avatar, Box, Typography } from "@mui/material";
import { useState } from "react";
import { HuePicker } from "react-color";
import { SliderPicker } from "react-color";


  
  export default function Entries () {
    const [color,setColor] = useState('ff0000')

    return(
        <>
        <Box className="border-4 border-emerald-400 flex items-center">
        <Avatar 
        alt="Remy Sharp" 
        src="https://i.pinimg.com/550x/31/23/2f/31232fe4b51b47763282524f008d9081.jpg" 
        sx={{ width: 100, height: 100 }}
        />
        <Typography className='text-2xl pl-3'>Username</Typography>
        </Box>

        <div>
            <SliderPicker
            color={color}
            onChangeComplete={ (color) => setColor(color.hex) }
            
            />
        </div>

        <div className="hidden lg:block " style={{
             backgroundColor: color,
             height:300,
             transition: 'ease all 500ms'
        }}>
            textvvsfbvsdfv
        </div>

        
        </>
    )

  }