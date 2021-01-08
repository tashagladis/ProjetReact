import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {

  const url = 'https://api.themoviedb.org/3/search/multi?api_key=4ecdcf45634968eebe5ba1378d7d2b9e&language=en-US&query=m&page=1'
  const [results , setResults] = useState([])

  useEffect(() => {
    const publicKey = '4ecdcf45634968eebe5ba1378d7d2b9e'

    const generatedUrl = 'https://api.themoviedb.org/3/movie/now_playing'
    const lang = 'en-US'
    const pge = '1'

    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/multi',
      params: { 
        api_key: publicKey,
        language : lang,
        query:'m',
        page: pge   
      }
    
    })
      .then(res => {
        console.log(res)
        setResults(res.data.results)
        
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
  return (
    <div>
      <p >Search</p>
    </div>
  );
};

export default Search;