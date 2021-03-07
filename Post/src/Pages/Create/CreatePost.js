import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { Button } from '@material-ui/core';

export default function CreatePost() {
    const[title,setTitle]=useState("")
    const[message,setMessage]=useState("")
    const handleSumbit=()=>{
        const config ={
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }
        const body={
            title: title,
    body: message,
    userId: 1,
        }
        try {
            const { data } = axios.post('https://jsonplaceholder.typicode.com/posts', body, config);
            
          } catch (err) {
            console.log(err)
              
          }
    }
    return (
        
      <>
      <Box display="flex" justifyContent="center" m={1} p={1} mt={10}>
        <Box p={1}>
        <TextField id="outlined-basic" label="Title" variant="outlined"
         
        value={title} onChange={(e)=>setTitle(e.target.value)} />
        </Box>
        
      </Box>
      
        <Box display="flex" justifyContent="center" m={1} p={1}  >
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
          value={message}
          variant="outlined"
          onChange={(e)=>setMessage(e.target.value)}
        />
        </Box>
        <Box display="flex" justifyContent="center" m={1} p={1}  >
        <Button onClick={handleSumbit}>Sumbit</Button>
        </Box>


        
    </>
    )
}
