import {ref} from 'vue'
import {useToggle} from '@vueuse/core'
import axios from 'axios'

  export const [show,showToggle] = useToggle(false)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  }

})

export const notes = ref([])
export const noteEdited = ref(null)

export const getAll = async () => {
 const {data} = await api.get('/notes')
 notes.value = data 
}

export const remove = async id => {
  await api.delete(`/notes/${id}`)
}
  export const add = async note => {
    await api.post('/notes', {note})
  }

  //add validation code here to update with proper lenght. and show error to end user 
  export const save = async note => {
    const { id, title, content} = note
    await api.put(`/notes/${id}`, {note: {title,content}})

  }
