import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, SubmissionStatus }) => {
  const [note, setNote] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  function noteChange(context) {
    setNote(context.target.value);
  }

  function dateChange(context) {
    setdate(context.target.value);
  }

  function timeChange(context) {
    settime(context.target.value);
  }

  function addItem() {
    SubmissionStatus.current = true
    add(function (preData) {
      // ... is take out all element in preData
      return [...preData, { id:v4(), note, date, time }];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>

      <div>紀事</div>
      <input type="text" value={note} onChange={noteChange} />
      <div>日期</div>
      <input type="date" value={date} onChange={dateChange} />
      <div>時間</div>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
      {/* onClick attribute is execute the fuction that user want to do */}
    </div>
  );
};

export default Edit;
