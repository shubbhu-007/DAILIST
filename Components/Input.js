import { useState } from "react";
import "../App.css";
import Overlay from "./Overlay";

const Input = ({ userData, setUserData, editItemId, setEditItemId, activityList, setActivityList }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const getUserValue = (e) => {
    setUserData({
      text: e.target.value,
      id: new Date().toLocaleTimeString(),
    });
  };

  const resetForm = () => {
    setUserData({
      text: "",
      id: "",
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    console.log(userData.text);
    if (userData.text === undefined || userData.text.trim() === "") {
      setShowPopUp(true);
    } else {
      if (editItemId !== null) {
        //edit existing item
        const updatedList = activityList.map((item) =>
          item.id === editItemId ? { ...item, text: userData.text } : item
        );
        setActivityList(updatedList);
        setEditItemId(null);
      } else {
        //create new activity
        const newActivity = {
          text: userData.text,
          id: userData.id,
        };

        setActivityList([...activityList, newActivity]);
      }

      resetForm();
    }
  };

  

  const closePopUp = () => {
    setShowPopUp(false);
    resetForm();
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add your work...."
          onChange={getUserValue}
          value={userData.text}
        />
        <button className={editItemId !== null ? "update-btn" : "add-btn"} onClick={formSubmit}>
         {editItemId !== null ? "Update" : '+'}
        </button>
      </form>

      {showPopUp && <Overlay closePopUp={closePopUp} />}
    </>
  );
};
export default Input;
