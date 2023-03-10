// https://lightrains.com/blogs/using-localstorage-hook-react/
import { useState, useEffect } from 'react'

const LoginFormStorage = (key, defaultValue) => {

    const [value, setValue] = useState(() => {

      let currentValue
  
      try {
        currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))

      } catch (error) {
        currentValue = defaultValue
      }
  
      return currentValue

    })
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])
  
    return [value, setValue]

}
  
  export default LoginFormStorage;