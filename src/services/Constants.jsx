import axios from "axios";



export async function Constants(){
    const Result = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_CONSTANT_KEY}&tag=&rating=g`)
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}


export async function Search(searchterm){
    const SearchResult = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_SEARCH_KEY}&q=${searchterm}&limit=25&offset=0&rating=g&lang=en`)
    .then(({ data }) => {
        return data;
      });
      return SearchResult;
    
}

// const axios = require("axios");

// export async function options(){
//   const ax = await axios({
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/agencies/list',
//   params: {
//     locationExternalIDs: '5002,6020',
//     purpose: 'for-rent',
//     hitsPerPage: '25',
//     page: '0',
//     lang: 'en',
//     sort: 'city-level-score',
//     rentFrequency: 'monthly',
//     categoryExternalID: '4'
//   },
//   headers: {
//     'X-RapidAPI-Key': '6025a43a6bmsh19c4725651ec4dep11669cjsndf253647f9a8',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }}) 
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });








