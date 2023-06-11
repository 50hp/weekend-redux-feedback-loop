import axios from 'axios';
import {useEffect, useState} from 'react';


function AdminPanel() {
   
    const [tableItems, setTableItems] = useState([]);
    
    const getFeedback = () => {
        axios.get('/feedback')
        .then(res => {
            setTableItems(res.data);
        }).catch(err => {
            console.log('error with get', err);
        });
    }; 

    const putFeedback = (id) => {
        axios.put('/feedback' + id)
        .then(res => {
            console.log('successful put on id:', id);
            getFeedback();
        }).catch(err => {
            console.log('error with put', err);
        });
    };

    const deleteFeedback = (id) => { 
        axios.delete('/feedback' + id)
        .then(res => {
            console.log('successful delete on id:', id);
            getFeedback();
        }).catch(err => {
            console.log('error with delete', err);
        });
    };


    useEffect(()=>{
        getFeedback();
    }, []);

    console.log(tableItems);

    return (
        <div>
            <p>asdlkfjasd;lfkj</p>

        </div>


    );
}

export default AdminPanel;
