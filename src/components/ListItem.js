import { useState } from "react";
// import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";




function ListItem({task, getData}) {

  const [showModal, setShowModal] = useState(false);

  // Deletes a task object
  const deleteData = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_SERVERURL}/tasks/delete/${task.id}`, {
      method: "DELETE"
    })
   .then((res) => {
    if(res.status === 200) {
      setShowModal(false);
      getData();
    }
   })
   .catch((err) => console.error(err));
  };

  const setProgress = (checked) => {
    if(checked === true) {
      task.progress = 100;
    }
    else{
      task.progress = 0;
    }
  }


  return (
    <li className="list-item">
      <div className="info-container">
        {/* <TickIcon></TickIcon> */}
        <input className="checkbox" onChange={setProgress(this.checked)} type="checkbox"></input>
        <p className="task-title">{task.title}</p> 
        <p className="progress-percentage">{task.progress}%</p>
        <ProgressBar progress={task.progress}></ProgressBar>
        <p className="due-date">Due {task.date}</p>
      </div>

      {/* button container */}
      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>Edit</button>
        <button className="delete" onClick={deleteData}>Delete</button>

      </div>

      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task = {task} getData={getData}/>}
    </li>
  );
}
  
  export default ListItem;