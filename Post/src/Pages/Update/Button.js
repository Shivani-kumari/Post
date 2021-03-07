import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios'
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({post}) {
  const [open, setOpen] = React.useState(false);
  const [title,setTite]= React.useState(post.title)
  const [body,setbody]=React.useState(post.body)

  const handleSumbit=()=>{
    const config ={
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    }
    const bod={
        id:post.id,
        title: title,
        body: body,
        userId: post.userId,
    }
    try {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, bod, config);
        setOpen(false)
        
      } catch (err) {
        console.log(err)
          
      }
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Update 
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">UPDATE</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            value={title}
            onChange={(e)=>setTite(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            type="text"
            multiline
            rows={8}
            value={body}
            onChange={(e)=>setbody(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSumbit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
