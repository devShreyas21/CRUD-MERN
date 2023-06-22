import { useState } from 'react'
import React from 'react'
import {FormGroup, FormControl, InputLabel, Input, Typography, styled, Button} from '@mui/material'
import  { addUser }  from '../services/addUser'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()
  
  const [User, setUser] = useState(defaultValues)
  
  const onChangeInput = (e)=>{

    setUser({...User , [e.target.name] : e.target.value})
  }
  

  const addUsers = async ()=>{
    await addUser(User)
    navigate("/alluser")
  }

  return (
    <div>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormCont>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onChangeInput(e)} name="name"/>
        </FormCont>
        <FormCont>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e)=>onChangeInput(e)} name='username'/>
        </FormCont>
        <FormCont>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>onChangeInput(e)} name='email'/>
        </FormCont>
        <FormCont>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e)=>onChangeInput(e)} name='phone'/>
        </FormCont>
        <FormCont>
          <Button variant="contained" onClick={addUsers} >Add User</Button>
        </FormCont>
      </Container>
    </div>
  )
}
