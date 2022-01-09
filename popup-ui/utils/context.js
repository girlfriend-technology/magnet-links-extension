import { createContext, useState, useEffect } from 'react'
import { getStorage, setStorage } from './storage'
import modes from '../constants/modes'
import has from 'lodash/has'

const Context = createContext({})

const Provider = ({ children, data: initialData = { mode: modes[0]} }) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    getStorage().then(storage => {
      if (has(storage, 'data')) {
        setData(storage.data)
      }
    })
  }, [])

  useEffect(() => {
    setStorage(data)
  }, [data])

  const context = {
    data,
    setData,
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}

const { Consumer } = Context

export {
  Context,
  Provider as ContextProvider,
  Consumer as ContextConsumer
}
