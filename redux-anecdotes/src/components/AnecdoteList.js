import React from 'react'
import { connect } from 'react-redux'
import Vote from './Vote'

const AnecdoteList =  (props) => {
    const anecdotes = props.anecdotes
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <Vote anecdote={anecdote} />
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps =  (state) => {
    return {
        anecdotes: state.anecdotes,
    }
}




const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList)
export default ConnectedAnecdoteList
