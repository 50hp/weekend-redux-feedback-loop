import axios from 'axios';
import {useEffect, useState} from 'react';
import TableItem from './TableItem/TableItem.jsx';

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

    const putFeedback = (id, status) => {
        axios.put('/feedback/' + id, {status})
        .then(res => {
            console.log('successful put on id:', id);
            getFeedback();
        }).catch(err => {
            console.log('error with put', err);
        });
    };

    const deleteFeedback = (id) => { 
        axios.delete('/feedback/' + id)
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
            <table className="adminTable">
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { tableItems.map(item => (
                       <tr key={item.id}>     
                            <TableItem item={item}
                                       putFeedback={putFeedback}
                                       deleteFeedback={deleteFeedback}
                                       />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    );
}

export default AdminPanel;
