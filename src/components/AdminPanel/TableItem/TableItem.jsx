import Button from '@mui/material/Button';

function TableItem({item, putFeedback, deleteFeedback}) {

    return(
        <>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td>{String(item.flagged)}</td>
            <td>{item.date}</td>
            <td><Button onClick={()=> putFeedback(item.id, item.flagged)}>Flag</Button></td>
            <td><Button onClick={()=> deleteFeedback(item.id)}>Delete</Button></td>
        </>
    );
}

export default TableItem;
