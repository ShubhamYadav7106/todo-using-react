import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Addform from './form';
import Update from './update';

function ViewData() {
  const [data,setData]=useState([])
  
  const [uid,setUId]=useState("")
  const[uname,setUname]=useState("")
  const[uemail,setUemail]=useState("")
  const[uphone,setUphone]=useState("")

  function getData(){
    axios.get('https://6729c3f56d5fa4901b6e402b.mockapi.io/user').then((res)=>{
      setData(res.data);
    })
  }

  const deleteHandle=(id)=>{
    axios.delete(`https://6729c3f56d5fa4901b6e402b.mockapi.io/user/${id}`).then((res)=>{
      getData()
    })
  }

  

  const updateHandle=(id)=>{
    axios.get(`https://6729c3f56d5fa4901b6e402b.mockapi.io/user/${id}`).then((res)=>{
      setUId(id)
      setUname(res.data.name)
      setUemail(res.data.email)
      setUphone(res.data.phone)
    })
    document.querySelector('.update_form').classList.add('show')
  }

  useEffect(()=>{
    getData()
  },[])
  return (<>
  <Addform getData={getData}/>

  <h3 className='viewDataTitle'>Entered data</h3>
    <div className='view_container'>
      <table>
        <tr className='head_data'>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th> 
          <th>Phone</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
            {
              data.map((item)=>(
                < tr className='table_getdata'>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td><button onClick={()=>deleteHandle(item.id)}>Delete</button></td>
                <td><button onClick={()=>updateHandle(item.id)}>Update</button></td>
                
                </tr>
              ))
            }
      </table>
    </div>
    <Update
        id={uid}
       
        uname={uname}
        uemail={uemail}
        uphone={uphone}
        setUId={setUId}
        setUname={setUname}
        setUemail={setUemail}
        setUphone={setUphone}
        getData={getData}
    />
    </>)
}

export default ViewData;