import { createContext } from 'react'

const StoreContext = createContext({
    token:null,
    setToken: (token:any) => {}
})

export default StoreContext