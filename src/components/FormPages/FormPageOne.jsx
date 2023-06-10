import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';


function PageOne() {
    
    const [inputOne, setInputOne] = useState();
    const dispatch = useDispatch(); 
    const history = useHistory();


    const handleChange = (value) => {
            setInputOne(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:"PAGE_ONE", payload: inputOne});
        nextButton();
    };

    const nextButton = () => {
            history.push('/pageTwo');
    };

    return(

        <div>
            <h1>How are you feeling today??</h1>            
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <label name="inputOne">Feeling?</label>
                    <input type="number"
                           name="inputOne"
                           value={inputOne}
                           onChange={(e) => handleChange(e.target.value)}
                           required/>
                    <button type="submit">Next</button>
                </form>
        </div> 




    );



}

export default PageOne;

