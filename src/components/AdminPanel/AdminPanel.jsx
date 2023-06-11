import axios from 'axios';
import {useEffect, useState} from 'react';
import AdminHeader from '../Headers/AdminHeader.jsx';
import TableItem from './TableItem/TableItem.jsx';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function AdminPanel() {
   
    const [tableItems, setTableItems] = useState([]);

//axios get request
    const getFeedback = () => {
        axios.get('/feedback')
        .then(res => {
            setTableItems(res.data);
        }).catch(err => {
            console.log('error with get', err);
        });
    }; 

//axios put request sends current status of flag
    const putFeedback = (id, status) => {
        axios.put('/feedback/' + id, {status})
        .then(res => {
            console.log('successful put on id:', id);
            getFeedback();
        }).catch(err => {
            console.log('error with put', err);
        });
    };

//axios delete request
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

    return (
        <div>
            <AdminHeader/>
           
            <TableContainer>
                <Table className="adminTable">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Comprehension</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Flag</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { tableItems.map(item => (
                           <TableRow key={item.id}>     
                                <TableItem item={item}
                                           putFeedback={putFeedback}
                                           deleteFeedback={deleteFeedback}
                                           />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

export default AdminPanel;
