import {useState} from "react";


function Modal({mode, setShowModal, task}) {
  const editMode = mode === "edit"? true : false;

  // data object represents a task
  const [data, setData] = useState({
    user_email: editMode? task.user_email : null,
    title: editMode? task.title : null,
    progress: editMode? task.progress : 50,
    date: editMode? "" : new Date()
  });

  // changes the data object when typing on the input components
  const handleChange = (e) => {
    const {name, value} = e.target;

    setData(data => ({
      ...data,
      [name]: value
    }));

    console.log(data);
  }

  return (
    <div className= "overlay">
      <div className="modal">
        <div className= "form-title-container">
          <h3>Let's {mode} your task</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form>
          <input
            required
            maxLength="30"
            placeholder=" Your task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          /> 
          <br/>
          <label for="range">Drag to select your current progress</label>
          <input
            required
            id="range"
            type="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          /> 
          <br/>
          
          <input className={mode} type="submit"/>

        </form>
      </div>
    </div>
  );
}
  
export default Modal;