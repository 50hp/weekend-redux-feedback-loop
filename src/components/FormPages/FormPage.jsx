import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';


function Page({nextPath, prePath, type, kind, question, label, page}) {
    const review = useSelector(store => store);

    const [input, setInput] = useState(String);
    const dispatch = useDispatch(); 
    const history = useHistory();


    const handleChange = (value) => {
            setInput(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (input === '' ){
            alert('fill input');
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

        <div>
            <span>
             {prePath ? (<button onClick={()=>history.push(prePath)}>Back</button>):(<></>)}
            </span> 
             <h1>{question}</h1>           
                    <label name="input">{label}</label>
                    <input type={kind}
                           name="input"
                           value={input}
                           onChange={(e) => handleChange(e.target.value)}
                           required/>
                    <button onClick={handleSubmit}>Next</button>
        </div> 
    );
}

export default Page;

