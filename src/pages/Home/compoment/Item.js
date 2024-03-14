const Item = ({ id, noteData, date, time, deleteData, SubmissionStatus }) => {
  
    function deleteItem() 
    {
        SubmissionStatus.current = true
        deleteData(function(prev)
        {
            return prev.filter(item => item.id !== id)
        })
    }
  
    return (
    <div className="item">
      <div>
        <div>{noteData}</div>
        <div>{date}</div>
        <div>{time}</div>
      </div>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;
