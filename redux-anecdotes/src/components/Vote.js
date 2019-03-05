import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const Vote = (props) => {

    const vote = (anecdote) => {
        props.addVote(anecdote)
        props.showNotification(`you voted for '${anecdote.content}'`, 5)
    }

    return (
        <button onClick={() => vote(props.anecdote)}>vote</button>
    )
}

const mapDispatchToProps = {
    addVote,
    showNotification
}

const ConnectedVote = connect(
    null,
    mapDispatchToProps
)(Vote)

export default ConnectedVote

