import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='abc'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
             <Typography id='a'
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            EMPLOYEE
          </Typography>
          <Link to='/A'>
          <Button id='b1'  variant='contained'>ADD</Button>
          </Link>
          <Link to='/B'>
          <Button id='b2' variant='contained'>VIEW</Button>
          </Link>
          </IconButton>
          </Toolbar>
      </AppBar>
    </Box>
    <br/><br/><br/>
   </div>
  )
}

export default Navbar
