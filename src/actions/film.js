import axios from 'axios'
export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS'

export const displayCharacters = characters => ({
  type: DISPLAY_CHARACTERS,
  payload: characters
})

export const getCharacters = () => dispatch => {
 axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: { 
      api_key: '4ecdcf45634968eebe5ba1378d7d2b9e',
      language : 'en-US',
      page: '1'   
    }
  
  })
    .then(res => {
      console.log(res.data.results)
     dispatch( displayCharacters(res.data.results))
      //setCharactersList(res.data.results)
      //setTotal(res.data.total_results)
    })
    .catch(err => {
      console.log(err)
    })

}