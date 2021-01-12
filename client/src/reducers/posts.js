export default  function(Posts= [] , action)
{
    switch (action.type)
    {
       case 'FETCH_ALL':
           return action.payload;
            
       case 'CREATE':
           return Posts;

          
    }
}