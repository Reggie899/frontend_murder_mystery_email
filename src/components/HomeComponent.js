import React, { useState, useEffect } from "react";
import Mails from "./Mails";
import Logout from "./Logout";
import axios from "axios";

function HomeComponent({ setSuccess, setValues, setResmail, resmail }) {
  const [saveData, setSaveData] = useState([]);
  const [chosenData1, setChosenData1] = useState("");
  const [chosenData2, setChosenData2] = useState("");

  // const dataSafe = (e) => {
  //   e.preventDefault();
  //   setChosenData(saveData[{index}])
  // }

  async function requestRead() {
    // e.preventDefault();
    try {
       axios
        .get("https://backend-murder-mystery.herokuapp.com/read/read", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then( (res) => {
           setSaveData(res.data.read);
          console.log("savedData", saveData);

        //   return res;
        // })
        // .then((res) => {
          // setResmail(
            // res.data.read.map((mails, index) => (
            //   // Only do this if items have no stable IDs
            //   <li
            //     key={index}
            //     className="mailList"
            //     onClick={() => {
            //       setChosenData1(saveData[index].time);
            //       setChosenData2(saveData[index].subject);
            //     }}
            //   >
            //     <p> {mails.subject}</p>
            //   </li>
          //   ))
          // );
          return res;
        })
        // .then((res) => console.log("fetched response", res.data))
        .then(console.log("chosenDat", chosenData1, chosenData2));

      // .then(console.log("hello"))
      // alert("lol")
    } catch {}
  }

  useEffect(() => {
    requestRead();
  }, [])

  const navigationBarItems = (
    <div className="menu">
      <div>All</div>
      <div onClick={requestRead}>Read</div>
      <div>Unread</div>
      <div>Spam</div>
      <div>Deleted</div>
      {/* <div>
<input type="search"/></div> */}
    </div>
  );

  // setResmail("");

  return (
    <div className="home">
      <Logout
        className="logoutBotton"
        setSuccess={setSuccess}
        setValues={setValues}
      />

      <h3>Welcome, Jimmy</h3>

      {navigationBarItems}

      <div className="container">
        <div className="sidebar">
          {/* {resmail} */}
          {/* <Mails resmail={resmail}/> */}
          {  saveData.map((mails, index) => (
              // Only do this if items have no stable IDs
              <li
                key={index}
                className="mailList"
                onClick={() => {
                  setChosenData1(saveData[index].time);
                  setChosenData2(saveData[index].subject);
                }}
              >
                <p> {mails.subject}</p>
              </li>))}
        </div>
        <div className="rightside">
          <div className="navigationBar">{chosenData1}</div>
          <div className="mailview">{chosenData2}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
