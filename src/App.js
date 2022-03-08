import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import { Search } from './services/Constants';
import SearchGifs from './components/SearchGifs';
import GifList from './components/GifList';
import PopUpTester from './components/PopUpTester';
import NoMatch from './components/NoMatch';


function App() {
  return (
    <div className="App">
      <div className='links'>
        {/* 'NavLink' links your pages. */}
        <nav>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"search"} >Search-Gifs</NavLink>
        </nav>  
      </div>
    <div>
      {/* // 'Routes' renders your pages. */}
      <Routes>
      // Route' in singular form is a self-closing tag.
        <Route path='/' element={<Home /> } />

        <Route path='search' element={<SearchResults /> } > 
        <Route path=':image_id' element={<PopUpTester /> } /> </Route>

        <Route path='*' element={ <NoMatch /> } />

      </Routes>
     
      </div>


    </div>
  );
}

export default App;
