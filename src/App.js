import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import PopUpTester from './components/PopUpTester';
import NoMatch from './components/NoMatch';
import { AppBar, Box, Button, ButtonGroup, ListItemButton, ListItemText, styled, Toolbar, Typography } from '@mui/material';
import Entries from './components/Entries';
import Singlehousing from './components/Singlehousing'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: 'row-reverse',
})




function App() {
  return (
      <>
      <AppBar position='sticky' sx={{index:0}}>
     
      <StyledToolbar className="bg-amber-600">
       
        {/* 'NavLink' links your pages. */}
        <nav>
          <ButtonGroup className="bg-amber-600 text-5xl">
          <NavLink to={"/"}  style={{ textDecoration: "none" }}>
            <ListItemButton className="py-4"   sx={{color:'white'}}  size="large"> 
              <ListItemText className="" primary="Home" />
            </ListItemButton>  
          </NavLink>
        
          <NavLink to={"search"} style={{ textDecoration: "none" }}>
            <ListItemButton className="py-4"  sx={{color:'white'}}  variant="text" size="large" >  
              <ListItemText primary="View Listings" />
            </ListItemButton> 
          </NavLink>

          <NavLink to={"entries"} style={{ textDecoration: "none" }}>
            <ListItemButton className="py-4"  sx={{color:'white'}}  variant="text" size="large" >  
              {/* <ListItemText primary="Entries" /> */}
            </ListItemButton> 
          </NavLink>
          </ButtonGroup>
        </nav>
        <Typography sx={{fontsize:'large'}}>HomeSeeker</Typography>
      </StyledToolbar>
    </AppBar>
    <Box>
        {/* // 'Routes' renders your pages. */}
        <Routes>
      // Route' in singular form is a self-closing tag.
          <Route path='/' element={<Home />} />

          <Route path='search' element={<SearchResults />}>

<Route path=':image_id' element={<PopUpTester />} /> </Route>

            {/* <Route path='entries' element={<Entries />} /> */}

          <Route path='*' element={<NoMatch />} />
          <Route path='/singleshowing/:id' element={<Singlehousing />} />
          

        </Routes>

      </Box>
      </>


      
  )
}

export default App;
