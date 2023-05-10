import React, { useState } from 'react'
import Axios from 'axios'
import { TextField, Box, Button } from '@mui/material'
function Search() {
    const [error, setError] = useState(null);
    const url = 'https://thronesapi.com/api/v2/Characters';

    const fetchAPI = () => {
        Axios.get(url).then((res) => {
            return res.data;
        }).catch(error => {
            setError(error);
        }) 
    }

  return (
    <Box sx={{
        marginTop: "100px"
    }}>
        <TextField variant="outlined" label="Search By Name" id="outline-box" ></TextField>
        <Button variant="outlined" onClick={fetchAPI}></Button>
    </Box>
  )
}

export default Search