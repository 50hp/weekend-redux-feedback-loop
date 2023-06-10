import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Success() {
        const dispatch = useDispatch();
        const histroy = useHistory();

        const handleNav = () => {
             dispatch({type:"RESET"});        
             histroy.push("/");
        }

    return(
            <div>
                <h3> Thank You! </h3>
                <button onClick={handleNav}>Leave New Feedback</button>
            </div>
    );




}

export default Success;
