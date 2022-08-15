import * as React from 'react';
import classes from './Header.module.css';
import { styled, alpha } from '@mui/material/styles';
import {
  Tooltip,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


// Below are the Styled-components used for Searching and Input
const SearchStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const InputStyle = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


function Header({ num, page, numberOfPostsHandler,pageNumberHandler }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{ backgroundColor: 'rgb(45, 156, 141)' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h5'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },paddingLeft: '1em' }}
          >
            Vite - A Feed Application
          </Typography>
          <h6>Page Number: </h6>
          <SearchStyle>
            <Tooltip title='Page Number' arrow>
              <InputStyle
                value={page}
                // onChange={pageNumberHandler}
                placeholder='Page Number'
                inputProps={{ 'aria-label': 'search' }}
                id='outlined-basic'
              />
            </Tooltip>
          </SearchStyle>
          <h6>Posts per Page: </h6>
          <SearchStyle>
            <Tooltip title='Number of Posts Loaded Per Page' arrow>
              <InputStyle
                value={num}
                onChange={numberOfPostsHandler}
                placeholder='Number of Posts Loaded Per Page'
                inputProps={{ 'aria-label': 'search' }}
                id='outlined-basic'
              />
            </Tooltip>
          </SearchStyle>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
