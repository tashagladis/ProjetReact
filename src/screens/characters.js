import axios from 'axios'
import md5 from 'md5'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import privateKey from '../.secret'

const Characters = props => {
  const [character, setCharacter] = useState({})
  const link = 'http://image.tmdb.org/t/p/w300/'

  const history = useHistory()
  const id = props.match.params.id
  useEffect(() => {
    const publicKey = '4ecdcf45634968eebe5ba1378d7d2b9e'
    const timeStamp = new Date().getMilliseconds()
    const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
    const generatedUrl = 'https://api.themoviedb.org/3/movie/550'
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
        setCharacter(res.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      <img
        src={`${link}+${character.logo_path}`}
      />
      <p>{character.name}</p>
    </div>
  )
}

export default Characters
