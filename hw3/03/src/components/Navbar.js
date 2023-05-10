import React from 'react'
import { NavLink} from "react-router-dom"
import '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material'


function Navbar() {
  return (
    <>
    <AppBar className='navbar'>
        <div className='navbar-container container'>
            <Toolbar sx={{display: "flex", justifyContent:"space-between"}}>
                <Typography className='nav-item'>
                    <NavLink to="/" className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}>
                        Home
                    </NavLink>
                </Typography>
                <Typography className='nav-item'>
                    <NavLink to="/search" className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}>
                        Search
                    </NavLink>
                </Typography>
                <Typography className='nav-item'>
                    <NavLink to="/houses" className={({isActive}) => "nav-link" + (isActive ? " activated" : "")}>
                        Houses
                    </NavLink>
                </Typography>
            </Toolbar>
        </div>
    </AppBar>
    </>
  )
}

export default Navbar