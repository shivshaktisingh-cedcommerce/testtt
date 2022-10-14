import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendmessage, setsessionanduser } from './Reduxaction'

const Component1 = () => {
  const[user1 , setUser1]=useState(['Select' , 'Add user'])

  const[allmessages1 , setAllmessages1]=useState([])
  const[allmessages2 , setAllmessages2]=useState([])
  const[currentmessage , setCurrentmessage]=useState('')
  const mystate = useSelector((state)=>state)
  const dispatch = useDispatch()
  const[userdetails , setUserdetails]=useState({
    user:'' ,
    username:''
  })
  const[flag , setFlag]=useState(false)
  const[flag1 , setFlag1]=useState(false)
  const select1_fun=(e)=>{
 if(e.target.value==='Add user'){
  setFlag(true)   
 }
  }
  const handler=(event)=>{
    setUserdetails({
      ...userdetails , [event.target.name]:event.target.value
    })
  }

  const handler1=()=>{
    let temp = parseInt(Math.random()*100000)
    let t = [...user1];
    let t1 = userdetails
    t1.username=t1.username+ "_" +temp
    setUserdetails(t1)
    t.push(userdetails.user)
    setUser1(t)
    sessionStorage.setItem(userdetails.user, userdetails.user+"_"+temp)
    localStorage.setItem(userdetails.user , userdetails.user+"_"+temp)
    dispatch(setsessionanduser( temp , t1.username))
    setFlag(false)
    setFlag1(true)
  }

  const send_fun=(e)=>{
    setCurrentmessage(e.target.value)
  }

  const send_current_message_fun=()=>{
    var names=[...allmessages1]
    localStorage.setItem(userdetails.user , JSON.stringify(names))
    console.log(JSON.parse(localStorage.getItem('shiv')))
    setAllmessages2(JSON.parse(localStorage.getItem(userdetails.user)))
    setAllmessages1([...allmessages1 , currentmessage])
    let t = [currentmessage]
    localStorage.setItem(userdetails.username , JSON.stringify(t))
    dispatch(sendmessage(currentmessage))
  }

  return (
    <div>
      <select onChange={select1_fun}>
      {user1.map((d)=>{
        return(
          <option key={d} value={d}>{d}</option>
        ) 
      })}
      </select>
      {flag?<div className="modal_div">
        <input type="text" value={userdetails.name} onChange={handler} placeholder="Name" name="user"/> 
        <input type="text" value={userdetails.username} onChange={handler} placeholder="User name" name="username"/>
        <button onClick={handler1}>Add User</button>
       </div>:""}
       {flag1?<div className="chatapp">
       
       {allmessages2.map((d)=>{
        return(
          <p>{d}</p>
        )
       })}
        <p><input type="text" value={currentmessage} onChange={send_fun}/><button onClick={send_current_message_fun}>Send</button></p>
       </div>:""}
    </div>
  )
}

export default Component1