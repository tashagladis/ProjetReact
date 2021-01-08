import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Character from '../components/character'

const Search = () => {

  const url = 'https://api.themoviedb.org/3/search/multi?api_key=4ecdcf45634968eebe5ba1378d7d2b9e&language=en-US&query=m&page=1'
  const [results , setResults] = useState([])
  const [query_search , setQuery_search] = useState('')

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
        query: query_search,
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

  }, [query_search])
  return (
    <div>
      <p >Search</p>
      <input type="text" onChange={e => setQuery_search(e.target.value)} ></input>
      <CharacterListContainer>
        {results.map((character, index) => (
          <Character key={index} character={character}
          ></Character>
        ))}
      </CharacterListContainer>
    </div>
  );
};

const CharacterListContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`
export default Search;