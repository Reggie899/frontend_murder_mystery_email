import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import axios from "axios";

function HomeComponent({ setSuccess, setValues }) {
  const [saveData, setSaveData] = useState([]);
  const [chosenData1, setChosenData1] = useState("");
  const [chosenData2, setChosenData2] = useState("");
  const [chosenData3, setChosenData3] = useState("");
  const [chosenData4, setChosenData4] = useState("");
  const [chosenData5, setChosenData5] = useState("");
  const [chosenData6, setChosenData6] = useState("");

  async function requestRead() {
    try {
      axios
        .get("https://backend-murder-mystery.herokuapp.com/read/read", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setSaveData(res.data.read);
          console.log("savedData", saveData);
          return res;
        })
        .then((res) => {
          setChosenData1(res.data.read[0].time);
          setChosenData2(res.data.read[0].subject);
          setChosenData3(res.data.read[0].date);
          setChosenData4(res.data.read[0].sender);
          setChosenData5(res.data.read[0].messagebody);
          setChosenData6(res.data.read[0].receiver);
        })
    } catch {}
  }

  useEffect(() => {
    requestRead();
  }, []);


  async function requestUnread() {
    try {
      axios
        .get("https://backend-murder-mystery.herokuapp.com/read/unread", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setSaveData(res.data.unread);
          return res;
        })
        .then((res) => {
          setChosenData1(res.data.unread[0].time);
          setChosenData2(res.data.unread[0].subject);
          setChosenData3(res.data.unread[0].date);
          setChosenData4(res.data.unread[0].sender);
          setChosenData5(res.data.unread[0].messagebody);
          setChosenData6(res.data.unread[0].receiver);
        })
    } catch {}
  }

  async function requestSpam() {
    try {
      axios
        .get("https://backend-murder-mystery.herokuapp.com/read/spam", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setSaveData(res.data.spam);
          return res;
        })
        .then((res) => {
          setChosenData1(res.data.spam[0].time);
          setChosenData2(res.data.spam[0].subject);
          setChosenData3(res.data.spam[0].date);
          setChosenData4(res.data.spam[0].sender);
          setChosenData5(res.data.spam[0].messagebody);
          setChosenData6(res.data.spam[0].receiver);
        })
    } catch {}
  }

  async function requestDeleted() {
    try {
      axios
        .get("https://backend-murder-mystery.herokuapp.com/read/deleted", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setSaveData(res.data.deleted);
          return res;
        })
        .then((res) => {
          setChosenData1(res.data.deleted[0].time);
          setChosenData2(res.data.deleted[0].subject);
          setChosenData3(res.data.deleted[0].date);
          setChosenData4(res.data.deleted[0].sender);
          setChosenData5(res.data.deleted[0].messagebody);
          setChosenData6(res.data.deleted[0].receiver);
        })
    } catch {}
  }

  async function requestSent() {
    try {
      axios
        .get("https://backend-murder-mystery.herokuapp.com/read/sent", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setSaveData(res.data.sent);
          return res;
        })
        .then((res) => {
          setChosenData1(res.data.sent[0].time);
          setChosenData2(res.data.sent[0].subject);
          setChosenData3(res.data.sent[0].date);
          setChosenData4(res.data.sent[0].sender);
          setChosenData5(res.data.sent[0].messagebody);
          setChosenData6(res.data.sent[0].receiver);
        })
    } catch {}
  }

  const navigationBarItems = (
    <div className="menu">
      <div onClick={requestRead}>Read</div>
      <div onClick={requestUnread}>Unread</div>
      <div onClick={requestSpam}>Spam</div>
      <div onClick={requestDeleted}>Deleted</div>
      <div onClick={requestSent}>Sent</div>
    </div>
  );

  const writeNew = () => {
    alert(
      "Function >Write new e-mail< currently out of order. Please try again later!"
    );
  };


  return (
    <div className="home">
      <Logout
        className="logoutBotton"
        setSuccess={setSuccess}
        setValues={setValues}
      />

      <h3>Welcome, Jimmy</h3>
      <button onClick={writeNew} className="newMail">Write new e-mail</button>
      {navigationBarItems}
      <div className="container">
        <div className="sidebar">
          {saveData.map((mails, index) => (
            // Only do this if items have no stable IDs
            <li
              key={index}
              className="mailList"
              onClick={() => {
                setChosenData1(saveData[index].time);
                setChosenData2(saveData[index].subject);
                setChosenData3(saveData[index].date);
                setChosenData4(saveData[index].sender);
                setChosenData5(saveData[index].messagebody);
                setChosenData6(saveData[index].receiver);
              }
          }
            >
              <p> {mails.subject}</p>
            </li>
          ))}
        </div>
        <div className="rightside">
          <div className="navigationBar">
            <div><span>time:</span>{chosenData1}</div>
            <div><span>date:</span>{chosenData3}</div>
            <div><span>receiver:</span>{chosenData6}</div>
            <div><span>sender:</span>{chosenData4}</div>
          </div>

          <div className="mailview">
            {" "}
            <div className="subject">Subject: {chosenData2}</div>
            <br/>
            <div>{chosenData5}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
