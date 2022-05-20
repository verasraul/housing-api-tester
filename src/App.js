import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import PopUpTester from './components/PopUpTester';
import NoMatch from './components/NoMatch';
import SalesListings from './components/SalesListing';
import ZillowListings from './components/ZillowListings';


function App() {
  return (
    <div className="App">
      <div className='links'>
        {/* 'NavLink' links your pages. */}
        <nav>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"search"} >Search-Gifs</NavLink>
          <NavLink to={"salesListing"} >Sales Listings </NavLink>
          <NavLink to ={"zillowListings"} >Zillow Listings</NavLink>
        </nav>  
      </div>
    <div>
      {/* // 'Routes' renders your pages. */}
      <Routes>
      // Route' in singular form is a self-closing tag.
        <Route path='/' element={<Home /> } />

        <Route path='search' element={<SearchResults /> } > 
        <Route path=':image_id' element={<PopUpTester /> } /> </Route>
        <Route path='salesListing' element={<SalesListings />} />
        <Route path='zillowListings' element={<ZillowListings />} />

        <Route path='*' element={ <NoMatch /> } />

      </Routes>
     
      </div>


    </div>
  );
}

export default App;
