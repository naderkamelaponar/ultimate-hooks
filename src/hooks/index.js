// بسم الله الرحمن الرحيم
import axios from 'axios'
import { useState } from 'react'
const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
  }
  const clear = ()=>{ 
    setValue('')}
  return {
    type,
    value,
    onChange,clear
  }
}
const fieldReducer = (ele) =>{
    return {value:ele.value,type:ele.type,onChange:ele.onChange}
}
const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  // ...
  const create = async (resource) => {
    // ...
    const response = await axios.post(baseUrl,resource)
    if (response.data) setResources(resources.concat(response.data)) 
    else setResources([])
  }
  const fetchAll = async ()=>{
    const response = await axios.get(baseUrl)
    if (response.data) setResources(response.data) 
    else setResources([])
  }
  const service = {
    create,fetchAll
  }

  return [
    resources, service
  ]
}
export {useField,useResource,fieldReducer}