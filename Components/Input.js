import "../App.css";
const Input = ({userData,setUserData,activityList,setActivityList}) => 
{

    const getUserValue = (e) => {
        setUserData({
            ...userData,
            text:e.target.value,
            id:new Date().toLocaleTimeString()
        })
    }

    const resetForm = () => {
        setUserData({
            text:"",
            id:""
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();

        const newActivity = {
            text:userData.text,
            id:userData.id
        }

        setActivityList([...activityList,newActivity]);

        resetForm();

    }

    return (

        <>
        <form>
        <input type="text" placeholder="Add your work...." onChange={getUserValue} value={userData.text} />
        <button  className="add-btn" onClick={formSubmit}>+</button>
        </form>
        </>
    )
}
export default Input;