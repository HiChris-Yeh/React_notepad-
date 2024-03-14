import Item from "./Item";

// const arr = ["mememe", 2, 3]

const List = ({ listData, deleteData, SubmissionStatus }) => {
  return (
    <div className="List">
      {
        // item similar with the elements in arr
        // listData.map traversal all the elements in listData than do the next step
        listData.map((item) => {
          const {  note = "", date, time, id} = item;
          return (
            <Item
              key={id}
              id={id}
              noteData={note}
              data={date}
              time={time}
              deleteData={deleteData}
              SubmissionStatus={SubmissionStatus}
            />
          );
        })

        // arr.map(item => <div>{item}</div>)
      }
    </div>
  );
};

export default List;
