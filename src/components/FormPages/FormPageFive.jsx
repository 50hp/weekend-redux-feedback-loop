import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function PageFive() {
    
    const review = useSelector(store => store);
    const history = useHistory(); 
    const handleSubmit = () => {
            history.push('/Success'); 


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
