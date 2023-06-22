import { useEffect, useState } from 'react'
import React from 'react'
import {FormGroup, FormControl, InputLabel, Input, Typography, styled, Button} from '@mui/material'
import  { getUser }  from '../services/getUser.js'
import { editUser } from '../services/editUser.js'
import { useNavigate, useParams } from 'react-router-dom'

const Container = styled(FormGroup)`
  width : 50%;
  margin : 5% auto 0 auto; 
`

const FormCont = styled(FormControl)`
  margin-top : 20px
`

const defaultValues={
  name : "",
  username : "",
  email : "",
  phone : ""
}



export default function AddUser() {

    const { id } = useParams()

  const navigate = useNavigate()
  
  const [User, setUser] = useState(defaultValues)

  useEffect(() => {
    loadNewContent()
  },[]) // this brackets says that render only once **** most important and took very much time to solve
  
  const loadNewContent = async () => {
    const res = await getUser(id)
    setUser(res.data)
  }
   
  const onChangeInput = (e)=>{

    setUser({...User , [e.target.name] : e.target.value})
  }
  

  const editUsers = async ()=>{
    await editUser(User,id)
    navigate('/alluser')
  }

  return (
    <div>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormCont>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onChangeInput(e)} name="name" value={User.name}/>
        </FormCont>
        <FormCont>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e)=>onChangeInput(e)} name='username' value={User.username}/>
        </FormCont>
        <FormCont>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>onChangeInput(e)} name='email' value={User.email}/>
        </FormCont>
        <FormCont>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e)=>onChangeInput(e)} name='phone' value={User.phone}/>
        </FormCont>
        <FormCont>
          <Button variant="contained" onClick={editUsers} >Edit User</Button>
        </FormCont>
      </Container>
    </div>
  )
}
