import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';
import { Card, CardHeader, CardContent, Avatar, IconButton, Typography } from '@mui/material'
import { color } from '@mui/system';

function PostCard({ len, index, lastPost, post }) {
  if (len === index) {
    return (
      <Card ref={lastPost} sx={{ width: 1150, height: 250 }}>
        <CardHeader
          avatar={<Avatar alt='Profile Pic' src={post.avatar} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          style={{backgroundColor:"#25CBB5"}}
          title={post.user}
          subheader={moment(post.createdAt).utc().format('DD/MM/YYYY')}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {post.post}
          </Typography>
        </CardContent>
      </Card>
    )
  } else {
    return (
      <Card ref={lastPost} sx={{ width: 1150, height: 250 }}>
        <CardHeader
          avatar={<Avatar alt='Profile Pic' src={post.avatar} />}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.user}
          style={{backgroundColor:"#25CBB5"}}
          subheader={moment(post.createdAt).utc().format('DD/MM/YYYY')}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {post.post}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default PostCard;
