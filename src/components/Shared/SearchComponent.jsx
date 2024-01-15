import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.65),
  },
  width: '15rem',
  [theme.breakpoints.up('sm')]: {
    width: '15rem',
  },
  backgroundColor: 'white',
  marginBottom:'2rem'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '13rem',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));


export default function PrimarySearchAppBar({setClotheSearched}) {

  const handlerChange = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();
    setClotheSearched(searchValue)
  };


  return (
    <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e)=> handlerChange(e)}
        />
    </Search>
  );
}