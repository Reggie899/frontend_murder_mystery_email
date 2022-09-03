import React from "react";
import Mails from "./Mails";
import Logout from './Logout';


const navigationBarItems = <div className="menu">
    <div>All</div>
    <div>Read</div>
    <div>Unread</div>
    <div>Spam</div>
    <div>Deleted</div>
    {/* <div>
<input type="search"/></div> */}
</div>

function HomeComponent({setSuccess, setValues}) {

  return (
    <div className="home">
        <Logout setSuccess={setSuccess} setValues={setValues}/>
      <div className="container">
        <div className="sidebar">
            <Mails />
        </div>
        <div className="rightside">
          <div className="navigationBar">
              {navigationBarItems}
              </div> 
          <div className="mailview"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
