import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Item from './PageFiveComonents/Item.jsx';

function PageFive() {
    
    const review = useSelector(store => store);
    const history = useHistory(); 
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/feedback', review)
        .then(response => {
            console.log('successful post');     
            history.push('/Success'); 
        }).catch(err => {
            console.log('error with post', err);
        });            

    }

    return(
        
        <div>
            <span>
                <button onClick={()=>history.push('/pageFour')}>Back</button>
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
            <button onClick={(event) => handleSubmit(event)}>Submit</button>
        </div>
    );
}

export default PageFive;
