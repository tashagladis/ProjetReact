import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/header/index'
import { useSelector} from 'react-redux'
import Character from '../components/character'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


const Home = props => {
  const valueOffset = 20
  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [charactersList, setCharactersList] = useState([])
  const history = useHistory()
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const counter= useSelector( state => state.counter.counterValue)

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const publicKey = '4ecdcf45634968eebe5ba1378d7d2b9e'
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
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  })
  if(isLoading){
    return (<p>Chargement en cours ...</p>)
  }
  return (
    
    <div>
      <p>{counter}</p>
      <CharacterListContainer>
      
        {charactersList[0] ? charactersList.map((character, index) => (
          <Character key={index} character={character}
          ></Character>
        )): <p>Pas de films disponible pour le moment!</p>}
     
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
