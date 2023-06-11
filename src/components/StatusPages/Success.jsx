import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Button from '@mui/material/Button';

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
                    <Button onClick={handleNav}>Leave New Feedback</Button>
            </div>
    );
}

export default Success;
