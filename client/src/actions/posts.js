import * as api from "../api";

 export const getPosts = () => async (dispatch) => {

  const {data} = await api.fetchPosts();

  dispatch({type:"FETCH_ALL",payload:data});

}

