import React, { useState } from 'react'
import './crud.css'
import axios from 'axios'


function Addform({getData}) {
        const [name,setName]=useState("")
        const [email,setEmail]=useState("")
        const [phone,setPhone]=useState("")
        const [alert,setAlert]=useState("")

        const submitHandle=()=>{
            axios.post('https://6729c3f56d5fa4901b6e402b.mockapi.io/user',{
                name:name,
                email:email,
                phone:phone
            }).then(()=>{
                setAlert('Data Added✔️')
                setName('');
                setEmail('');
                setPhone('');
                getData()
                
            })
            
        }
  return (<>

        <div className='crud_container'>
            <div className='crud_add_data'>
       <input type='text' placeholder='Enter Your Name'value={name} onChange={(e)=>setName(e.target.value)}/> 
       <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='number' placeholder='Enter Your Number'value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <button onClick={submitHandle} className='add_btn'>Add Data</button>
                <br/><h3 className='alert_span'>{alert}</h3>
            </div>
            
           
        </div>
    
    </>)
}

export default Addform
