const Anecdote = ( {anecdote, vote, notify} ) => {

    const handleClick = () => {
        vote(anecdote.id)
        notify(`You voted for "${anecdote.content}" by ${anecdote.author}`)
    }

    console.log(anecdote)
    return (
        <div>
            <h2>{anecdote.content} by {anecdote.author}</h2>
            <div>has {anecdote.votes} votes</div>
            <div>For more information, see: {anecdote.info}</div>
            <button onClick={handleClick}>vote</button>
            <br/>
        </div>
    )
}


export default Anecdote
