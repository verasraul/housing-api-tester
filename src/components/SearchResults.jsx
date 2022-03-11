import { useEffect, useState } from "react";
import SearchGifs from "./SearchGifs";
import GifList from "./GifList";
import { Search } from "../services/Constants";
import PopUpTester from "./PopUpTester";




export default function SearchResults(props){
    // inittialize the image list to the full list passed in props
    const [gifSearch, setGifSearch] = useState([])
    
    const fetchData = async (searchterm) => {
        try {
          const response = await Search(searchterm);
          setGifSearch(response.data);

          // SHOW THIS TO JON:
            // CODE BREAKS WHEN WE UNBLOCK CONOLE.LOG BELOW
            // STOPS IMAGES FROM DISPLAYING IN 'SearchResults'
          // console.log('setGifSerch=', setGifSearch(response.data))
          
          // console.log('gifSearch=', gifSearch.map((item) => item.url))
          // console.log('response.data=',response.data.map((x) => x.id));
        } catch (error) {
          console.log(error);
        }
      }


    
    //handle the filter, and upstate when the filter value changes
    //store the filter state and filter the list of gifs to display

    const handleGifChange = (event) => {
        event.preventDefault();

        //  grab value from event
        const gifValue = event.target.value;
    

        fetchData(gifValue);
        // console.log('THIS IS fetchData= ' + fetchData('dog'));
    }


    useEffect( () => {
        fetchData();
    }, [])


    
    return (
        <div>
          <h1 className="search-section">This is the Search-Gif Section</h1>
        <SearchGifs onClick={handleGifChange} onChange={(e) => handleGifChange(e)} />
        <br></br>
        <GifList gifs={gifSearch} />
        <PopUpTester gifs={gifSearch} />
        {/* <PopUpTester image={gifSearch} /> */}
        </div>

   )
    //All of the data is hoisted to the top of the tree in the container
    // and it is passed to the child components 
}