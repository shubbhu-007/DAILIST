import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";


// Components
import Header from "./Components/Header";
import Input from "./Components/Input";
import Activity from "./Components/Activity";


const App = () => {
    const [activityList,setActivityList] = useState([]);
    const [userData ,setUserData ] = useState({text:""});
    console.log(activityList);

    const [editItemId, setEditItemId] = useState(null);
    const editedItem = (itemId) => {
        const itemToEdit = activityList.find((item) => item.id === itemId);
        setEditItemId(itemId);
        setUserData({
          text:itemToEdit.text,
          id:itemId,
        });
      };
    


    return(
        <>
        <Header/>
        <main>
        <Input
        userData = {userData}
        setUserData = {setUserData} 
        activityList = {activityList}
        setActivityList= {setActivityList}
        editItemId = {editItemId}
        setEditItemId = {setEditItemId}
        />

        <Activity
       
        editedItem = {editedItem}
        activityList = {activityList}
        setActivityList= {setActivityList}
        />
        </main>

        </>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
