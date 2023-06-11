import {useState} from 'react';
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


        <div>
                <label name="reviewInput">{props.title}</label>
                { edit.clickState ? (
               <span> 
                    <input type={props.type}
                        className="reviewFormInput"
                        name="reviewInput"
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}
                        required
                        />
                    <button onClick={(event)=>handleEdit(event)}>{edit.text}</button>
                </span> 
                ) : (
                <span>
                    <input type={props.type}
                            className="reviewFormInput"
                            name="reviewInput"
                            value={value}
                            readOnly
                            required
                            />
                    <button onClick={(event)=>handleEdit(event)}>{edit.text}</button>
                </span> 
                )}
                 
        </div>
    );
}

export default Item;


