import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';



function PageFour() {

    const [inputFour, setInputFour] = useState('');
    const dispatch = useDispatch(); 
    const history = useHistory();


    const handleChange = (value) => {
            setInputFour(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:"PAGE_FOUR", payload: inputFour});
        nextButton();
    };

    const nextButton = () => {
            history.push('/pageFive');
    };

    return(

        <div>
            <h1>Leave any comments you want to leave??</h1>            
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <label name="inputFour">Support?</label>
                    <input type="text"
                           name="inputFour"
                           value={inputFour}
                           onChange={(e) => handleChange(e.target.value)}
                           required/>
                    <button type="submit">Next</button>
                </form>
        </div> 




    );


}

export default PageFour;
