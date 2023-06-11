import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../Headers/Header.jsx';
import Item from './PageFiveComonents/Item.jsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function PageFive() {
    
    const review = useSelector(store => store);
    const history = useHistory(); 

//axios get request
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/feedback', review)
        .then(response => {
            console.log('successful post');     
            history.push('/Success'); 
        }).catch(err => {
            console.log('error with post', err);
        });            

    };

    return(

        <div>
            <Header/>
             <Grid 
                container
                spacing={0}
                direction="column"
                alignItems="center"
                sx={{ minHeight: '100vh' }}>
            
                <Box sx={{
                    border: 3,
                    borderRadius: 5,
                    boxShadow: 10,
                    width:1/2,
                    padding: 5,
                }}>

                    <span>
                        <Button onClick={()=>history.push('/pageFour')}>Back</Button>
                    </span> 
         
                    <h1>Review Your Feedback</h1>

                    <Item value={review.pageOneReducer}
                          title={"Feeling:  "}
                          type={"number"}
                          action={"PAGE_ONE"}/>
                    <Item value={review.pageTwoReducer}
                          title={"Understanding:  "}
                          type={"number"}
                          action={"PAGE_TWO"}/>
                    <Item value={review.pageThreeReducer}
                          title={"Support:  "}
                          type={"number"}
                          action={"PAGE_THREE"}/>
                    <Item value={review.pageFourReducer}
                          title={"Comments:  "}
                          type={"text"}
                          action={"PAGE_FOUR"}/>
                    <Button onClick={(event) => handleSubmit(event)}>Submit</Button>
                </Box>
            </Grid>
        </div>
    );
}

export default PageFive;
