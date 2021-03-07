import React,{ useEffect, useState } from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import LikeButton from './LikeButton'
import { Container } from "reactstrap";
import {fetchPost,likePost} from '../redux/actions/CurdAction'
import { useDispatch, useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Typography from '@material-ui/core/Typography';
import Navbar from './navbar'
import axios from 'axios'

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
export default function Home() {
  const [search,setSearch]=useState("")
  const classes = useStyles();
  const Post = useSelector((state) => state.curd.postList);

  const [color,setColor]=useState("default")
 


  console.log(Post)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
 
  }, []);


  const handleLike = (id)=>{
    // dispatch(likePost(id));
   
  }
 


  

  const handleDelete = (id)=>{
    try {
       axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      
    } catch (err) {
      console.log(err)
        
    }
  }
  return (
    <>
    <Navbar search={search} setSearch={setSearch}></Navbar>
    <div>
     {Post.filter(val=>{
                    if(search==""){
                      return val
                    }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                        return val

                    }
                  }).map((post,i)=>{return <Container>
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
        
        <Button size="small" color="secondary" onClick={()=>handleDelete(post.id)}>
         Delete
        </Button>
       <IconButton color={color}  component="span" onClick={()=>handleLike(post.id)}>
          <ThumbUpAltIcon/>
        </IconButton>
      </CardActions>
    </Card>
     </Container>})}
    </div>
    </>
  )
}
