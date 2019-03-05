import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const createNew = async (content) =>{
    const object = {content,votes:0}
    const response = await axios.post(url,object)
    return response.data
}

const update = async (anecdote) =>{
    const id = anecdote.id
    const votes = anecdote.votes+1
    const newAnecdote = {...anecdote,votes}
    const response = await axios.put(`${url}/${id}`,newAnecdote)

    return response.data
    
}

export default {
    getAll,
    createNew,
    update
}