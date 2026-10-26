import React from "react";
import jQuery from "jquery";

function FormStatus(props) {
  const state = { showing: true };
  const { showing } = state;
  function notificationhide(){
    console.log('working icon click');
    jQuery('.notification').slideUp();
  }
  return (
    
    <div
      className={
        "notification" +
        (props.type === "error" ? " is-danger" : "") +
        (props.type === "success" ? " is-success" : "")
      }
    >
      <i className="fa fa-times" onClick={notificationhide}></i>
      {props.message}
    </div>
  );
}

export default FormStatus;
