import * as React from 'react';
import { useReducer, useRef, useCallback } from 'react';
import AppCss from './App.module.css';
import { Container } from '@mui/system';
import { Snackbar,Alert, Grid, Box } from '@mui/material';
import FetchPosts from './components/FetchPosts';
import Header from './components/Header';
import PostCard from './components/PostCard';
import Load from './components/Load';
import LoadingCard from './components/ui/LoadingCard';
import ErrorCard from './components/ui/ErrorCard';


function reducer(state, action) {
  switch (action.type) {
    case 'setNum':
      return {
        ...state,
        num: action.payload.num,
      };
    case 'setPage':
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
}
function App() {
  const [state, appDispatch] = useReducer(reducer, { page: 1, num: 3 });

  const { isLoading,isError,data,hasMoreData, postDispatch } = FetchPosts(
    state.num,
    state.page,
  );

  const observer= useRef();

  const lastPost = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(vals => {
        if (vals[0].isIntersecting && hasMoreData) {
          appDispatch({
            type: 'setPage',
            payload: { page: state.page + 1 },
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMoreData]
  );

  function numberOfPostsHandler(n) {
    appDispatch({ type: 'setNum', payload: { num: n.target.value } });
    appDispatch({ type: 'setPage', payload: { page: 1 } });
    postDispatch({ type: 'setPostEmpty' });
  }
  function pageNumberHandler(n) {
    appDispatch({ type: 'setPage', payload: { page: n.target.value } });
    postDispatch({ type: 'setPostEmpty' });
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Header
        num={state.num}
        page={state.page}
        numberOfPostsHandler={numberOfPostsHandler}
        pageNumberHandler={pageNumberHandler}
      />
      <Container>
        <Grid
          container
          style={{ marginTop: '4em' }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
         >
          {data.map((post, index) => {
            return (
              <Grid item xs={12} sm={12}>
                <PostCard
                  len={data.length}
                  index={index + 1}
                  lastPost={lastPost}
                  key={post}
                  post={post}
                />
              </Grid>
            )
          })}
          {isLoading && (<LoadingCard />)}
        </Grid>
        {isError && (<ErrorCard/>)}
      </Container>
    </Box>
  );
}

export default App
