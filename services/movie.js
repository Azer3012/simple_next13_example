
import axios from "axios"
const API_URL = "https://api.themoviedb.org/3";
const fetchMovieApi=async(pathname,query='')=>{
    try {
        const response = await axios.get(
            `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
          );
      
          return response.data;
    } catch (error) {
        throw new Error(error)
    }
}

export {fetchMovieApi};