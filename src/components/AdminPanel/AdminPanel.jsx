import axios from 'axios';
import {useEffect, useState} from 'react';


function AdminPanel() {
   
    const [tabeItems, setTableItems] = useState([]);
    
    const getFeedback = () => {
    axios.get('/feedback')
    .then(res => {
        setTableItems(res.data);
    }).catch(err => {
        console.log('error with get', err);
    });
}; 






    return (
        <div>
            <p>asdlkfjasd;lfkj</p>

        </div>


    );
}

export default AdminPanel;
