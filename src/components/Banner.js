import Modal from "./Modal";
import { useState } from "react";
import { useCookies } from "react-cookie";

function Banner({getData}) {
  const [cookies, setCookies, removeCookies] = useCookies(null);
  //sign out function
  const signOut = () => {
    removeCookies('Email');
    removeCookies('AuthToken');
    window.location.reload();
  };

  const [showModal, setShowModal] = useState(false);

  
    return (
      <div className="banner">
        <p className="tasky">Tasky</p>
        <div className="button-container">
          <button className="create" onClick={() => setShowModal(true)}>New</button>
          <button className="signout" onClick={signOut}>Sign Out</button>
          {showModal && <Modal mode={"create"} setShowModal={setShowModal} getData={getData}/>}
        </div>
      </div>
    );
  }
  
  export default Banner;