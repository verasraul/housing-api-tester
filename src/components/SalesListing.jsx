import axios from "axios";
// import defaults from "nodemon/lib/config/defaults";
import {  useEffect, useState } from 'react';

export default function SalesListings()  { 
    

const [ salesListings, setSalesListings ] =  useState([]) 
const options = {
  method: 'GET',
  url: 'https://realty-mole-property-api.p.rapidapi.com/saleListings',
  params: {city: 'New York City', state: 'NY'},
  headers: {
    'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com',
    'X-RapidAPI-Key': '40ed94058amsh7ea2a390ee2b317p13fdd0jsn46455bad4fb4'
  }
};

useEffect( ( ) => {
     const response =  axios.request(options).then(function (response) {
         setSalesListings(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
            
    })
  }, [])

  const listingsMaps = salesListings.map( (listing) => {
        return (
            <div key={listing.id}>
                <br></br>
            {listing.formattedAddress},
            <br></br>
            Property Type: {listing.propertyType},
            <br></br>
            Price: ${listing.price},
            Days on Market: {listing.daysOnMarket} days,
            </div>
        )
  })

  return (
      <div className="Sales-Listings">
          {listingsMaps}
      </div>
  )

  }  
