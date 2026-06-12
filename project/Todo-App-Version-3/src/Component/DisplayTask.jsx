function DisplayTask(props) {
  return (
    <>
      {props.task.map((item, index) => (
        <div key={index} className="row task-row align-items-center">
          <div className="col-6 text-start task-name">
            📌 {item.name}
          </div>

          <div className="col-4 text-start task-date">
            {item.date}
          </div>

          <div className="col-2">
            <button className="btn btn-danger w-100">
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayTask;
