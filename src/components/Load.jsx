import React from 'react'
import classes from './Load.module.css'
import { Stack, Skeleton, Grid } from '@mui/material'

function Load() {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <Stack spacing={1} width='1150px' height='250px' className={classes.loading}>
          <Skeleton
            variant='circular'
            width={40}
            height={40}
            animation='wave'
            className={classes.title}
          />
          <Skeleton variant='rectangular' height={60} animation='wave' />
          <Skeleton variant='text' height={20} animation='wave' />
          <Skeleton variant='text' height={20} animation='wave' />
          <Skeleton variant='text' height={20} animation='wave' />
          <Skeleton variant='text' height={20} animation='wave' />
        </Stack>
      </Grid>
    </>
  )
}
export default Load;