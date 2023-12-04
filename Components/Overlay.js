const Overlay = ({closePopUp}) => {
  console.log(closePopUp)
  return (
    <div className="overlay_container">
      <div className="overlay_box">
        <h3>Please Enter Some Characters.....</h3>
        <button className="go-back-btn" onClick={closePopUp}>Go Back</button>
      </div>
    </div>
  );
};

export default Overlay;