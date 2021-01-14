export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incrementeCounter = () => ({
  type: INCREMENT_COUNTER
})

export const decrementeCounter = decrementValue => ({
  type: DECREMENT_COUNTER,
  payload: decrementValue
})

export const fakeFunction = () => dispatch => {
  return 0 
}