import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Page({nextPath, prePath, type, kind, question, label, page}) {
    const review = useSelector(store => store);

    const [input, setInput] = useState(String);
    const [filled, setFilled] = useState(true);
    const dispatch = useDispatch(); 
    const history = useHistory();


    const handleChange = (value) => {
            setInput(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (input === '' ){
            setFilled(false);
            return;
        }
        dispatch({type:type, payload: input});
        history.push(nextPath);
    };

    useEffect(() => {
    switch (page) {
        case 'ONE':
           setInput(review.pageOneReducer);
            break;
        case 'TWO':
            setInput(review.pageTwoReducer);
            break;
        case 'THREE':
            setInput(review.pageThreeReducer);
            break;
        case 'FOUR':
            setInput(review.pageFourReducer);
            break;
        default:
            break;
    }
    }, []);

    return(

        <div className="FormBox">
            <span>
             {prePath ? (<Button onClick={()=>history.push(prePath)}>Back</Button>):(<></>)}
            </span> 
             <h1>{question}</h1>
                    {(filled) ? (
                    <TextField id="filled-basic" 
                               label={label} 
                               variant="filled"
                               type={kind} 
                               onChange={(e) => handleChange(e.target.value)}
                               value={input}
                               />
                    ) : (
                    <TextField id="filled-basic" 
                               label={label} 
                               variant="filled"
                               type={kind} 
                               onChange={(e) => handleChange(e.target.value)}
                               value={input}
                               error
                               helperText="Fillout Input!"
                               />
                    )}
                    <Button onClick={handleSubmit}>Next</Button>
        </div> 
    );
}

export default Page;

