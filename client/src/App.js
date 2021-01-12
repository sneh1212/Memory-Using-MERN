import React,{useEffect} from "react";
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/posts"
import memory from "./images/memories.png";
import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import useStyles from "./styles";








const App= function(){

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(function(){
        dispatch(getPosts);
    },[dispatch]);

 

    return (
        
        <Container maxidth="lg">
           
        <AppBar className={classes.appBar}position="static" color="inherit">

         <Typography className={classes.heading}variant="h2" align="center"> 
          Memories
         </Typography>
         <img className={classes.image}src={memory} alt="memory" height="60"/>
        </AppBar>
        <Grow in>
           <Container>
               <Grid container justify="space-between"  alignItems="stretch" spacing={4}>
                 
                 <Grid item xs={12} sm={7}>
                  
                  <Posts />
                 </Grid>

                 <Grid item xs={12} sm={4}>
                  <Form />
                 </Grid>

               </Grid>
           </Container>
        </Grow>

        </Container>
        
        );
};

export default App;