import React, {useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getCharacters } from '../actions/film'


const Film = () => {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.film.characters)
  useEffect(() => {
    dispatch(getCharacters())
  }, [])
  return (
    <div>
      <p>Film</p>
      {characters.map(character => (
        <p>{character.title}</p>
      ))}
    </div>
  );
};

export default Film;