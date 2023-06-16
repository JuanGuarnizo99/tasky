import Modal from "./Modal";
import { useState } from "react";

function ListHeader({listName}) {
  //sign out function
  const signOut = () => {
    console.log("signout");
  };

  const [showModal, setShowModal] = useState(false);


  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>New</button>
        <button className="signout" onClick={signOut}>Sign Out</button>
      </div>
      {showModal && <Modal mode={"create"} setShowModal={setShowModal}/>}
    </div>
  );
}

export default ListHeader;