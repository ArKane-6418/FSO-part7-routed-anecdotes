import React from 'react'
import { useField } from '../hooks'
import { useHistory } from 'react-router'

const CreateNew = (props) => {
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
    const history = useHistory()
  
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNew({
            'content': content.value,
            'author': author.value,
            'info': info.value,
            votes: 0
        })
        history.push("/")
        props.notify(`A new anecdote "${content.value}" was created`)
    }

    const reset = () => {
        content.reset()
        author.reset()
        info.reset()
    }
  
    return (
      <div>
        <h2>Create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input type={content.type} value={content.value} onChange={content.onChange} />
          </div>
          <div>
            author
            <input type={author.type} value={author.value} onChange={author.onChange} />
          </div>
          <div>
            url for more info
            <input type={info.type} value={info.value} onChange={info.onChange} />
          </div>
          <button>create</button>
          <button type='button' onClick={reset}>reset</button>
        </form>
      </div>
    )
  }

  export default CreateNew