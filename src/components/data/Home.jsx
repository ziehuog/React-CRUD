import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../redux/posts/postsAction';
import {
    Button,
    Container,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination, Typography
  } from "@mui/material";
function Home() {
    const data = useSelector((state) => state.posts);

const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(listPosts())

  },[])
  console.log(data)
    return ( 
        <>
    <div  style={{marginTop: '80px', backgroundColor: '#9C27B0', width: '100%'}}>
    <Container >
    <div className="page__header">
    <Typography id="transition-modal-title" variant="h4" component="h2">
            List Posts
          </Typography>
      <div>
      </div>
    </div>
    </Container>
    </div>
    <Container fixed>
    { (data.length === undefined) ? <div> No data </div> : (
              data
              ?.map((post, index) => (
                <div key={post.id} style={{borderBottom: '1px solid #333', padding: '10px 0'}}>
                    <h3>{post.title}</h3>
                    <div>{post.body}</div>
                </div>
              ))
            )}
    </Container>
    </>
     );

}

export default Home;