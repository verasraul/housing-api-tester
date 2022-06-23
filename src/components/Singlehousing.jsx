import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Singlehousing(){
    const [house,sethouse] = useState([])
    const { id } = useParams();

    const fetchData = async (h_id) => {
        
      

        const options = {
          method: 'GET',
          url: 'https://bayut.p.rapidapi.com/properties/detail',
          params: {externalID: `${h_id}`},
          headers: {
            'X-RapidAPI-Key': '5f2077a9f4msh069cb47279f5cc6p1c12a0jsn6443999e8964',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {;
            sethouse(response.data)
            console.log('call',house)
        }).catch(function (error) {
            console.error(error);
        });
  
        };

        useEffect(() => {
            fetchData(id)
        },[])
        //room
        //bath
        //score
        //discription
        console.log('after',house)

    return(
        <>
        {/* <img class="w-64" src={house.coverPhoto.url} /> */}
        
        </>
    )
}