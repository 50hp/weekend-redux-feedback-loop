import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';


function PageThree() {

    const [inputThree, setInputThree] = useState(String);
    const dispatch = useDispatch(); 
    const history = useHistory();


    const handleChange = (value) => {
            setInputThree(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:"PAGE_THREE", payload: inputThree});
        nextButton();
    };

    const nextButton = () => {
            history.push('/pageFour');
    };

    return(

        <div>
            <h1>How well are you being supported??</h1>            
                    <label name="inputThree">Support?</label>
                    <input type="number"
                           name="inputThree"
                           value={inputThree}
                           onChange={(e) => handleChange(e.target.value)}
                           required/>
                    <button onClick={handleSubmit}>Next</button>
        </div> 




    );

}

export default PageThree;
