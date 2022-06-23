import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import SearchGifs from "./SearchGifs";
import GifList from "./GifList";
import PopUpTester from "./PopUpTester";



export default function SearchResults(){
    // inittialize the image list to the full list passed in props
    const [gifSearch, setGifSearch] = useState([])
    const [listSearch, setListSearch] = useState([])
    
    const fetchData = async (searchterm) => {
      const listing = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/auto-complete',
        params: {query: `${searchterm}`, hitsPerPage: '25', page: '0', lang: 'en'},
        headers: {
          'X-RapidAPI-Key': '6025a43a6bmsh19c4725651ec4dep11669cjsndf253647f9a8',
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
      };

      axios.request(listing).then(function (response) {
        // console.log(response.data.hits);
        setListSearch(`${response.data.hits}`)
      }).catch(function (error) {
        console.error(error);
      });

      function getHitImg(imageID){
      const options = {
        method: 'GET',
        url: 'https://bayut.p.rapidapi.com/properties/list',
        params: {
          locationExternalIDs: `${imageID}`,
          purpose: 'for-rent',
          // hitsPerPage: '25',
          page: '0',
          lang: 'en',
          sort: 'city-level-score',
          rentFrequency: 'monthly',
          categoryExternalID: '4'
        },
        // headers: {
        //   'X-RapidAPI-Key': '6025a43a6bmsh19c4725651ec4dep11669cjsndf253647f9a8',
        //   'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        // }
      }};
      // axios.request(getHitImg.options).then(function (response) {
      //   console.log(response.data.hits);
      //   setGifSearch(response.data.hits);
      // }).catch(function (error) {
      //   console.error(error);
      // });
      
        // try {
          // const response = await options();
          // setGifSearch(response.data);
          // console.log(response.data)
        

          // SHOW THIS TO JON:
            // CODE BREAKS WHEN WE UNBLOCK CONOLE.LOG BELOW
            // STOPS IMAGES FROM DISPLAYING IN 'SearchResults'
          // console.log('setGifSerch=', setGifSearch(response.data))
          
          // console.log('gifSearch=', gifSearch.map((item) => item.url))
          // console.log('response.data=',response.data.map((x) => x.id));
        // } catch (error) {
          // console.log(error);
        // }

      };


    
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
      // <Search> <InputBase placeholder="search" />    </Search>
        <div>
          <h1 className="search-section text-3xl pt-8 text-stone-50">This is the Search-Gif Section</h1>
        <SearchGifs onClick={handleGifChange} onChange={(e) => handleGifChange(e)} />
        <br></br>
        
        <GifList gifs={gifSearch} />
       
        {/* <PopUpTester image={gifSearch} /> */}
        </div>

   )
    //All of the data is hoisted to the top of the tree in the container
    // and it is passed to the child components 
}