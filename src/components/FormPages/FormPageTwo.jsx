import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';



function PageTwo() {



    const [inputTwo, setInputTwo] = useState();
    const dispatch = useDispatch(); 
    const history = useHistory();


    const handleChange = (value) => {
            setInputTwo(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:"PAGE_TWO", payload: inputTwo});
        nextButton();
    };

    const nextButton = () => {
            history.push('/pageThree');
    };

    return(

        <div>
            <h1>How is your understanding the content??</h1>            
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <label name="inputTwo">Understanding?</label>
                    <input type="number"
                           name="inputTwo"
                           value={inputTwo}
                           onChange={(e) => handleChange(e.target.value)}
                           required/>
                    <button type="submit">Next</button>
                </form>
        </div> 




    );


}


export default PageTwo;
