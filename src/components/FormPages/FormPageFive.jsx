import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function PageFive() {
    
    const review = useSelector(store => store);
    const history = useHistory(); 
    const handleSubmit = () => {
           
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
            <h1>Review Your Feedback</h1>
            <p>Feelings: {review.pageOneReducer}</p>
            <p>Understanding: {review.pageTwoReducer}</p>
            <p>Support: {review.pageThreeReducer}</p>
            <p>Comments: {review.pageFourReducer}</p> 

            <button onClick={handleSubmit}>Submit</button>

        </div>


     
    );

}

export default PageFive;
