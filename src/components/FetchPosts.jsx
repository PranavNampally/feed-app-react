import { useEffect, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
      case 'setPosts':
        return {
          ...state,
          data: [...new Set([...state.data, ...action.payload.posts])],
        };
      case 'setError':
        return {
          ...state,
          isError: action.payload.isError,
        };
      case 'setLoading':
        return {
          ...state,
          isLoading: action.payload.isLoading,
        };
      case 'setHasMoreData':
        return {
          ...state,
          hasMoreData: action.payload.hasMoreData,
        };
      case 'setPostsEmpty':
        return {
          ...state,
          data: [],
        };
      default:
        return state;
    }
  }
function FetchPosts(num,page){
    const[state,postDispatch] = useReducer(reducer,{
        isLoading: true,
        isError: false,
        data: [],
        hasMoreData:false,
});
useEffect(() => {
    postDispatch({type: 'setLoading', payload: {isLoading: true}});
    postDispatch({type: 'setError', payload: {isError: false}});
    fetch(
      `http://localhost:8080/api/posts?page=${page}&num=${num}`
    ).then((response) => {
        return response.json();
      }).then((response) => {
        postDispatch({type: 'setPosts', payload: {posts: response.results}});
        postDispatch({type: 'setHasMoreData', payload: {hasMoreData: response.hasNext}});
        postDispatch({type: 'setLoading', payload: {isLoading: false}});
      }).catch((error)=>{postDispatch({type: 'setError', payload: {isError: true}})
    });
  }, [num,page]);
//   return { state.isLoading,state.isError,state.data,state.hasMoreData,postDispatch };
const [isLoading,isError,data,hasMoreData] = [state.isLoading,state.isError,state.data,state.hasMoreData];
return {isLoading,isError,data,hasMoreData,postDispatch};
}
export default FetchPosts;
