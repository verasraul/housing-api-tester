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

