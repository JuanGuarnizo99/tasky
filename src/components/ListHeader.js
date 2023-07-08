import Modal from "./Modal";
import { useState } from "react";
import { useCookies } from "react-cookie";

function ListHeader({listName, getData}) {
  const [cookies, setCookies, removeCookies] = useCookies(null);
  //sign out function
  const signOut = () => {
    removeCookies('Email');
    removeCookies('AuthToken');
    window.location.reload();
  };

  const [showModal, setShowModal] = useState(false);


  return (
    <div className="list-header">
      <h1>{listName}</h1>
    </div>
  );
}

export default ListHeader;