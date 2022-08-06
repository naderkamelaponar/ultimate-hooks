// بسم الله الرحمن الرحيم
import { useField,useResource,fieldReducer } from '../hooks/index'
import { useEffect } from 'react'
const Persons = ()=>{
    const [persons, personService] = useResource('http://localhost:3005/persons')
    const name = useField('text')
    const number = useField('text')
    useEffect(()=>{
        personService.fetchAll()  
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
    const handlePersonSubmit = (event) => {
        event.preventDefault()
        personService.create({ name: name.value, number: number.value})
        name.clear()
        number.clear()
      }
    return (
        <>
         <h2>persons</h2>
        <form onSubmit={handlePersonSubmit}>
        name <input {...fieldReducer(name)} /> <br/>
        number <input {...fieldReducer(number)} />
        <button>create</button>
        </form>
        {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
        </>
    )
}
export default Persons