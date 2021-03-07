import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {fetchPost} from '../../redux/actions/CurdAction'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Container } from "reactstrap";
import TextField from '@material-ui/core/TextField';
import Button from './Button'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UpdatePost() {
  const classes = useStyles();
  const[title,setTitle]=useState("")
    const[message,setMessage]=useState("")
  const Post = useSelector((state) => state.curd.postList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPost());
  }, []);

  const handleSumbit=(id,title,message,userId)=>{
    const config ={
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    }
    const body={
        id:id,
        title: title,
body: message,
userId: userId,
    }
    try {
        const { data } = axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, body, config);
        
      } catch (err) {
        console.log(err)
          
      }
}

  return (
      <>
      { Post.map((post,i)=>{
          return <Container>
          <Card className={classes.root} key={i}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
             {post.title}
            </Typography>
            <Typography variant="body2" component="p">
             {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            
            <Button post={post}></Button>
          </CardActions>
        </Card>
         </Container>
      })
    
    }
    </>
  );
}
