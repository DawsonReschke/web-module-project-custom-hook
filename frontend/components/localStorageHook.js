import { useState } from "react";

export default function useLocalStorage(key,value){
    const [valueLS,setValueLS] = useState(()=>{
        const localItem = window.localStorage.getItem(key)
        return localItem ? localItem : value
    })

    const setLocalStorage = (value) =>{
        window.localStorage.setItem(key,JSON.stringify(value)); 
        setValueLS(value); 
    }

    return [valueLS,setLocalStorage]
}
