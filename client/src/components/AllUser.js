import React from 'react'
import  { allUser }  from '../services/allUser'
import { useEffect, useState } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, Button  } from '@mui/material'
import { Link } from 'react-router-dom'
import { deleteUser } from '../services/deleteUser'


export default function AllUser() {

  const clicked = async (id) => {
    console.log(id)
    await deleteUser(id)
  }

  const [User, setUser] = useState([])

  useEffect(() => {
    getAllUser()
  })
  
  const getAllUser = async () => {
    const res = await allUser()
    setUser(res.data)
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            {/* <TableCell>Id</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            User.map((user)=>{
              return (<TableRow>
                {/* <TableCell>{user._id}</TableCell> */}
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button variant="contained" onClick={()=>clicked(user._id)}>Delete</Button>
                </TableCell>
              </TableRow>)
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}
