// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [img,setImg]=useState('')
    const [isLoading,setIsLoading] = useState(false)
    // let isLoading = false
    useEffect(
        ()=>
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(res=>{setImg(res.message)
            setIsLoading(true)
            console.log(img)})
        
        
        
    ,[])
    if (!isLoading) return <p>is Loading ...</p>
  return (
        <img src={img} alt='A Random Dog'></img>
  )
}

export default App