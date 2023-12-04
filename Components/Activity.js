import { useState } from "react";
import "../App.css";
import { no_item_img_url } from "../config.js";

const Activity = ({userData, setUserData,activityList, setActivityList }) => {
  const editedItem = (itemId) => {
    console.log(itemId);

    
  };
  const deleteActivity = (itemId) => {
    const filterItem = activityList.filter((item) => {
      return item.id !== itemId;
    });
    setActivityList([...filterItem]);
  };

  return activityList.length == 0 ? (
    <div className="no_activity_class">
      <h3>Looks Like ! You don't have any work to do 😊</h3>
      <img src={no_item_img_url} alt="no item image" />
    </div>
  ) : (
    <div className="container">
      {activityList.map((activity) => {
        return (
          <div className="individual_item" key={activity.id}>
            <p>{activity.text}</p>
            <div>
              <button
                className="edit-btn"
                onClick={() => {
                  editedItem(activity.id);
                }}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  deleteActivity(activity.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activity;
