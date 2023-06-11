

function TableItem({item, putFeedback, deleteFeedback}) {

    return(
        <>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td>{String(item.flagged)}</td>
            <td>{item.date}</td>
            <td><button onClick={()=> putFeedback(item.id, item.flagged)}>Flagg</button></td>
            <td><button onClick={()=> deleteFeedback(item.id)}>Delete</button></td>
        </>
    );
}

export default TableItem;
