import React,{useEffect} from 'react'

function Logout() {

    useEffect(()=>{
        localStorage.removeItem('token')
        window.location = '/'
    },[])
    console.log('logout')

  return (
    <div>Logout</div>
  )
}

export default Logout