import React, { useEffect } from 'react'
import InputBase  from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { Paper } from '@mui/material';
import { useSearchParams } from 'react-router-dom'

const SearchBar = () => {
  const [searchParams, setSearch] = useSearchParams();
  const handleChange = ({ target }) => setSearch({ q: target.value });

  return (
    <Paper component="form"
    sx={{ display: 'flex', alignItems: 'center', width: 400 }}>
        <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 18 }}
        placeholder="Search By Name..."
        value={searchParams.get("q") ?? ""}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider sx={{ height: 28, m: 0.3, bgcolor: "#dedede" }} orientation="vertical" />
        <IconButton type="button" sx={{ p: '10px' }} disabled>
            <SearchIcon color = "secondary"/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;
