import React,{useEffect,useState} from 'react'
import http from "../../utils/http"


function Profile() {
useEffect(()=>{
  getUserProfile()
},[])

  const [user,setUser] = useState()

  const getUserProfile = async () => {
  const response =  await http.get('/user')
   setUser(response.data)

}

  return (
    <div>
      <h1>Profile</h1>
      <h5>name :  {user?.name}</h5>
        <h5>email : {user?.email}</h5>
    

    </div>
  )
}

export default Profile