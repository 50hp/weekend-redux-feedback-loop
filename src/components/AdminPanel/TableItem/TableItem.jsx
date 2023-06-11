import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
function TableItem({item, putFeedback, deleteFeedback}) {

    return(
        <>
            <TableCell align="left">{item.feeling}</TableCell>
            <TableCell align="left">{item.understanding}</TableCell>
            <TableCell align="left">{item.support}</TableCell>
            <TableCell align="left">{item.comments}</TableCell>
            <TableCell align="left">{String(item.flagged)}</TableCell>
            <TableCell align="left">{item.date}</TableCell>
            <TableCell align="left"><Button onClick={()=> putFeedback(item.id, item.flagged)}>Flag</Button></TableCell>
            <TableCell align="left"><Button onClick={()=> deleteFeedback(item.id)}>Delete</Button></TableCell>
        </>
    );
}

export default TableItem;
