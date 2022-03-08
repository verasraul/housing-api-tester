import { useState, useEffect } from 'react';
import { Constants } from '../services/Constants';
// import GifList from './GifList';

export default function RandomGif(){
    const [gifs, setGifs] = useState([]);
    const fetchData = async () => {
        try {
          const response = await Constants();
          setGifs(response.data.images.downsized_medium.url);
          // console.log(setGifs);
        } catch (error) {
          console.log(error);
        }
      }

    console.log(fetchData);
    useEffect(() => {
      fetchData();
    },[setGifs])

    

    return(
          <div>
          <img src={ gifs } />
          <br></br>
      

          <button onClick= {fetchData}>
            Generate Gif
          </button>
        </div>
    )
}










