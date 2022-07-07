import { toast } from 'react-toastify'

export const randomFontSize = (min, max) => Math.random() * (max - min) + min
export const randomWordRegister = () => {
  const bool = Math.random() < 0.5
  const register = (bool === true) ? 'uppercase' : 'capitalize'
  return register
}

const toastOnError = (error) => {
  if (error.response) {
    // known error
    toast.error(JSON.stringify(error.response.data))
  } else if (error.message) {
    toast.error(JSON.stringify(error.message))
  } else {
    toast.error(JSON.stringify(error))
  }
}

export default toastOnError