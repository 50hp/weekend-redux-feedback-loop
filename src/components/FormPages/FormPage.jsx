import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';


function Page({nextPath, type, question, label}) {

    const [input, setInput] = useState('');
    const dispatch = useDispatch(); 
    const history = useHistory();


    const handleChange = (value) => {
            setInputOne(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        dispatch({type:type, payload: inputOne});
        history.push(nextPath);
    };


    return(

        <div>
            <h1>{question}</h1>            
                    <label name="input">{label}</label>
                    <input type="number"
                           name="input"
                           value={input}
                           placeholder="Ener a number"
                           onChange={(e) => handleChange(e.target.value)}
                           required/>
                    <button onClick={handleSubmit}>Next</button>
        </div> 




    );



}

export default Page;

