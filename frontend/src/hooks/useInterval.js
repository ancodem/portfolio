import { useEffect, useRef } from 'react'

const  useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Запоминает последний калбек
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Устанавливает интервал
  // eslint-disable-next-line
  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval