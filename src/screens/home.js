import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/header/index'


import md5 from 'md5'

import privateKey from '../.secret'
import Character from '../components/character'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const Home = props => {
  const valueOffset = 20
  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)

  const [charactersList, setCharactersList] = useState([])

  const history = useHistory()



  useEffect(() => {
    const publicKey = '4ecdcf45634968eebe5ba1378d7d2b9e'
    const timeStamp = new Date().getMilliseconds()
    const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
    const generatedUrl = 'https://api.themoviedb.org/3/movie/now_playing'
    const lang = 'en-US'
    const pge = '1'

    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: { 
        api_key: publicKey,
        language : lang,
        page: pge   
      }
    
    })
      .then(res => {
        console.log(res)
        setCharactersList(res.data.results)
        setTotal(res.data.total_results)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    
    <div>
      
      <CharacterListContainer>
        {charactersList.map((character, index) => (
          <Character key={index} character={character}
          ></Character>
        ))}
      </CharacterListContainer>
     
    </div>
  )
}

const CharacterListContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`

export default Home
