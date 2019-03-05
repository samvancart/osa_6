import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const Vote = (props) => {

    const vote = (id, content) => {
        props.addVote(id)
        props.showNotification(`you voted for '${content}'`)

        setTimeout(() => {
            props.showNotification('')
        }, 5000)
    }

    return (
        <button onClick={() => vote(props.anecdote.id, props.anecdote.content)}>vote</button>
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

