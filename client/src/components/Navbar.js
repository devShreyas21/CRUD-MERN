import React from 'react'
import {AppBar , Toolbar, styled } from '@mui/material'
import {NavLink} from 'react-router-dom'

const Header = styled(AppBar)`
  background: #111111
`;

const Tabs = styled(NavLink)`
  margin-right: 20px;
  color : inherit;
  text-decoration:none;
`

export default function Navbar() {
  return (
    <div>
        <Header position='static'>
            <Toolbar>
              <Tabs to='/'>CodeSmashers</Tabs>
              <Tabs to='/alluser'>All User</Tabs>
              <Tabs to='/adduser'>Add User</Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}
