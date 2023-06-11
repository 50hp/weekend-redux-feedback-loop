import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function Item(props) {
   
    const dispatch = useDispatch();
    const [value, setValue] = useState(props.value)
    const handleChange = (target) => {
       setValue(target);
    } 
    
    const [edit, setEdit] = useState({clickState:false, text:'Edit'});
    const handleEdit = (event) => {
        event.preventDefault();
        if (edit.clickState) {
            setEdit({clickState:false, text:'Edit'});
            dispatch({type:props.action, payload:value});
        }else{
            setEdit({clickState:true, text:'Save'}); 
        }
    }
    

    return ( 


        <div className="reviewBox">
                { edit.clickState ? (
               <span> 
                    <TextField type={props.type}
                               className="reviewFormInput"
                               label={props.title}
                               name="reviewInput"
                               value={value}
                               onChange={(e) => handleChange(e.target.value)}
                               size="small"
                               margin="dense"
                               color="warning"
                               focused
                               required
                               />
                    <Button onClick={(event)=>handleEdit(event)}>{edit.text}</Button>
                </span> 
                ) : (
                <span>
                    <TextField type={props.type}
                               className="reviewFormInput"
                               label={props.title}
                               name="reviewInput"
                               value={value}
                               readOnly
                               size="small"
                               margin="dense"
                               color="success"
                               focused
                               required
                               />
                    <Button onClick={(event)=>handleEdit(event)}>{edit.text}</Button>
                </span> 
                )}
                 
        </div>
    );
}

export default Item;


