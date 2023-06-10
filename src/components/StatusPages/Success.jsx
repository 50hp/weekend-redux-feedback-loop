import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Success() {
        const dispatch = useDispatch();
        const history = useHistory();

        const handleNav = () => {
            dispatch({type:"RESET"});
            history.push('/'); 
        }

    return(
            <div>
                    <h2>Thank You!</h2>
                    <button onClick={handleNav}>Leave New Feedback</button>
            </div>
    );
}

export default Success;
