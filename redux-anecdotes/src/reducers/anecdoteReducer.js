import anecdoteService from '../services/anecdotes'

export const addVote = (anecdote) => {
  return async dispatch => {
    const newObject = await anecdoteService.update(anecdote)
    dispatch({
      type: 'VOTE',
      data: newObject
    })
  }
}

export const createNew = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteTochange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteTochange,
        votes: anecdoteTochange.votes += 1
      }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    case 'CREATE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer