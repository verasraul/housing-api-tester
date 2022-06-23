import React from 'react';
import { Box, InputBase, Stack, styled, TextField, Toolbar } from "@mui/material";

// const Search = styled('div')(({theme})=>({
//     backgroundColor: 'white',
//     padding:"0px 10px",
//     borderRadius: theme.shape.borderRadius,
//     width: '90%'
//   }))

//   const StyledToolbar = styled(Toolbar)({
//     display: "flex",
//     justifyContent: "space-between",
// })

export default function SearchGifs(props){ 



return (
    <div className='grid grid-rows-2 grid-cols-3 gap-4 '> 
    {/* border-4 border-indigo-500/100  */}
        {/* <StyledToolbar> */}
        
        <Toolbar className='col-start-2 justify-self-center self-center ' variant="h6" sx={{display:{xs:"none",sm:"block"}}}> Search for Listings </Toolbar>
           
        <TextField placeholder="Search" variant='filled' className="w-full row-start-2 col-start-2 bg-amber-600 rounded-lg text-lg" value={props.value} onChange={props.onChange} />
           
        
        {/* </StyledToolbar> */}
        
       
    </div>

);
}

 



