import { useState, useEffect } from "react";
import axios from "axios";



export default function ZillowListings() {
    const [ zillowListings, setZillowListings ] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://zillow-zestimate.p.rapidapi.com/get-property',
        params: {zpid: '32003567'},
        headers: {
          'X-RapidAPI-Host': 'zillow-zestimate.p.rapidapi.com',
          'X-RapidAPI-Key': '6025a43a6bmsh19c4725651ec4dep11669cjsndf253647f9a8'
        }
      };

    useEffect( () => {
        const response = axios.request(options).then(function (response) {
            setZillowListings(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return(
        <div className="Zillow-Listings">

        </div>
    )
}