// بسم الله الرحمن الرحيم
import { useField,useResource,fieldReducer } from '../hooks/index'
import { useEffect } from 'react'
const Notes = ()=>{
    const content = useField('text')
  const [notes, noteService] = useResource('http://localhost:3005/notes')
  useEffect(()=>{
    noteService.fetchAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
    content.clear()
  }
  return (
    <>
     <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...fieldReducer(content)} />
        <button>create</button>
      </form>
      {notes.map(n => <p key={n.id}>{n.content}</p>)}
    </>
  )
}
export default Notes