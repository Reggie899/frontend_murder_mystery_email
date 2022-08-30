import React from "react";
import Mails from "./Mails";

const navigationBarItems = <div className="menu">
    <div>All</div>
    <div>Read</div>
    <div>Unread</div>
    <div>Spam</div>
    <div>Deleted</div>

</div>

function HomeComponent() {
  return (
    <div className="home">
      <container>
        <div className="sidebar">
            <Mails />
        </div>
        <div className="rightside">
          <div className="navigationBar">
              {navigationBarItems}
              </div> 
          <div className="mailview"></div>
        </div>
      </container>
    </div>
  );
}

export default HomeComponent;
