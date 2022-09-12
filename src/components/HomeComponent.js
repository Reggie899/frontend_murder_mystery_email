import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import axios from "axios";
import booking from "../booking1.png";

function HomeComponent({ setSuccess, setValues }) {
  const [saveData, setSaveData] = useState([]);
  const [chosenData1, setChosenData1] = useState("");
  const [chosenData2, setChosenData2] = useState("");
  const [chosenData3, setChosenData3] = useState("");
  const [chosenData4, setChosenData4] = useState("");
  const [chosenData5, setChosenData5] = useState("");
  const [chosenData6, setChosenData6] = useState("");
  const [chosenData7, setChosenData7] = useState(null);
  const [chosenData8, setChosenData8] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [security1, setSecurity1] = useState(0);
  const [security2, setSecurity2] = useState(0);
  const [security3, setSecurity3] = useState(0);
  const [seeSecurity, setSeeSecurity] = useState(false);
  const [seeOption1, setSeeOption1] = useState(true);
  const [seeOption2, setSeeOption2] = useState(true);
  const [seeOption3, setSeeOption3] = useState(true);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);


  async function requestRead() {
    try {
      setSeeSecurity(true);
      setChosenData8(null);
setSelected1(true);
setSelected2(false);
setSelected3(false);
setSelected4(false);
setSelected5(false);

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
        });
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    requestRead();
  }, []);

  async function requestUnread() {
    setSeeSecurity(false);
    setChosenData8(null);
    setSelected1(false);
    setSelected2(true);
    setSelected3(false);
    setSelected4(false);
    setSelected5(false);
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
        });
    } catch(err) {
      console.log(err);
    }
  }

  async function requestSpam() {
    setSeeSecurity(false);
    setChosenData8(null);
    setSelected1(false);
    setSelected2(false);
    setSelected3(true);
    setSelected4(false);
    setSelected5(false);
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
        });
    } catch(err) {
      console.log(err);
    }
  }

  async function requestDeleted() {
    setSeeSecurity(false);
    setChosenData8(null);
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    setSelected4(true);
    setSelected5(false);
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
        });
    } catch(err) {
      console.log(err);
    }
  }

  async function requestSent() {
    setSeeSecurity(false);
    setChosenData8(null);
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    setSelected4(false);
    setSelected5(true);
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
        });
    } catch(err) {
      console.log(err);
    }
  }

  const navigationBarItems = (
    <div className="menu">
      <div className={selected1 ? "bold" : null} onClick={requestRead}>Read</div>
      <div className={selected2 ? "bold" : null} onClick={requestUnread}>Unread</div>
      <div className={selected3 ? "bold" : null} onClick={requestSpam}>Spam</div>
      <div className={selected4 ? "bold" : null} onClick={requestDeleted}>Deleted</div>
      <div className={selected5 ? "bold" : null} onClick={requestSent}>Sent</div>
    </div>
  );

  const writeNew = () => {
    alert(
      "Function >Write new e-mail< currently out of order. Please try again later!"
    );
  };

  const restoreBlock = (
    <div>
      {seeOption1 ? (
        <div>
          Subject: "I have compromising material of you" <span></span>{" "}
          <button
            onClick={() => {
              setSeeSecurity(true);
              setSecurity1(1);
              setSeeOption1(false);
            }}
          >
            Restore
          </button>
        </div>
      ) : null}
      {seeOption2 ? (
        <div>
          Subject: "Swindon Town Fair" <span></span>{" "}
          <button
            onClick={() => {
              setSeeSecurity(true);
              setSecurity2(1);
              setSeeOption2(false);
            }}
          >
            Restore
          </button>
        </div>
      ) : null}
      {seeOption3 ? (
        <div>
          Subject: "Flight Booking Confirmation" <span></span>{" "}
          <button
            onClick={() => {
              setSeeSecurity(true);
              setSecurity3(1);
              setSeeOption3(false);
            }}
          >
            Restore
          </button>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="home">
      <Logout
        className="logoutBotton"
        setSuccess={setSuccess}
        setValues={setValues}
      />

      <h3>Welcome, Jimmy</h3>
      <button onClick={writeNew} className="newMail">
        Write new e-mail
      </button>
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
                setChosenData7(saveData[index].link);
                setChosenData8(null);
              }}
            >
              <p> {mails.subject}</p>
            </li>
          ))}
          {security1 > 0 && seeSecurity ? (
            <li className="mailList">
              <p
                onClick={() => {
                  setChosenData1("9.45 am");
                  setChosenData2("I have compromising material of you");
                  setChosenData3("2022-09-16");
                  setChosenData4("Mr. XXX");
                  setChosenData5(
                    "Brandson, I have comprising material of you. If you don't want the world to see it, leave an envelope at 3pm next Monday behind the phone booth at Watson corner. Otherwise the world will see very private parts of you."
                  );
                  setChosenData6("Jimmy Brandson");
                  setChosenData7(null);
                  setChosenData8(null);
                }}
              >
                I have compromising material of you
              </p>
            </li>
          ) : null}
          {security2 > 0 && seeSecurity ? (
            <li className="mailList">
              <p
                onClick={() => {
                  setChosenData1("07.14 am");
                  setChosenData2("Swindon Town Fair");
                  setChosenData3("2022-09-21");
                  setChosenData4("City Committee");
                  setChosenData5(
                    "Dear Mr. Brandson, we would love to invite you to the town fair 2022 in Swindon. Your last year's performance was delightful. And our committee would like to offer you another role as clown. Payment is possible, but we would appreciate it if you could perform and offer your salary to our charity. Please let us know what you think. Best of regards, your Swindon City Committee"
                  );
                  setChosenData6("Jimmy Brandson");
                  setChosenData7(null);
                  setChosenData8(null);
                }}
              >
                Swindon Town Fair
              </p>
            </li>
          ) : null}
          {security3 > 0 && seeSecurity ? (
            <li className="mailList">
              <p
                onClick={() => {
                  setChosenData1("06.02 pm");
                  setChosenData2("Flight Booking Confirmation");
                  setChosenData3("2022-09-29");
                  setChosenData4("Safeflights.com");
                  setChosenData5("Please see your booking confirmation below");
                  setChosenData6("Jimmy Brandson");
                  setChosenData7(false);
                  setChosenData8(true);
                }}
              >
                Flight Booking Confirmation
              </p>
            </li>
          ) : null}
        </div>
        <div className="rightside">
          <div className="navigationBar">
            <div>
              <span>time:</span>
              {chosenData1}
            </div>
            <div>
              <span>date:</span>
              {chosenData3}
            </div>
            <div>
              <span>receiver:</span>
              {chosenData6}
            </div>
            <div>
              <span>sender:</span>
              {chosenData4}
            </div>
          </div>

          <div className="mailview">
            {" "}
            <div className="subject">Subject: {chosenData2}</div>
            <br />
            <div>{chosenData5}</div>
            {chosenData7 ? (
              <div>
                <a onClick={() => setSeeMore(true)} className="chosenData7">
                  Click here
                </a>
              </div>
            ) : null}
            {chosenData7 && seeMore ? restoreBlock : null}
            {chosenData8 ? <img src={booking} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
