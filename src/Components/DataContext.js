import { createContext } from 'react'

const DataContext=createContext({
    secondInfo:"",
    thirdInfo:"",
    fifthInfo:"",
    cart:"",
    shopData:"",
    count:"",
    addToCart:"",
    inc:"",
    dec:"",
    del:"",
})

export default DataContext