import axios from 'axios'
import React from 'react'
import './crud.css'

function Update({ id,uname,uemail,uphone,setUphone,setUname,setUemail,getData}) {

    const updateHandle=(id)=>{
        axios.put(`https://6729c3f56d5fa4901b6e402b.mockapi.io/user/${id}`,{
            name:uname,
            email:uemail,
            phone:uphone
        }).then(()=>{
            getData()
        })
        document.querySelector('.update_form').classList.remove('show')
    
}
  return (
    <>
    <div className='update_form'>
        <h2>
            Update Form
        </h2>
        <div className='form_div'>
    <input type='text' value={uname} onChange={(e)=>setUname(e.target.value)}/>
    <input type='text' value={uemail} onChange={(e)=>setUemail(e.target.value)}/>
    <input type='number' value={uphone} onChange={(e)=>setUphone(e.target.value)}/>
    <button onClick={()=>updateHandle(id)}>Update</button>
        </div>
            </div>
    </>
  )
}

export default Update