import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export default function LikeButton({color,setColor,id,like,setLike}) {
    const handleLike = (id)=>{
        setLike(id)
    }
    return (
        <div>
            <IconButton color={color}  component="span" onClick={()=>handleLike(id)}>
          <ThumbUpAltIcon/>
        </IconButton>
        </div>
    )
}
