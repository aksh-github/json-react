import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { inject, xml2json } from "./util";
import { UIBuilder } from "./UIBuilder";
import { GlobalProvider } from "./GlobalContext";

// export const Ele = (props) => {
//   return <h4 title={props.title}>{props.title}</h4>;
// };

// export const List = (props) => {
//   return props.list.map((txt, idx) => {
//     return <Ele key={"k" + idx} title={txt} />;
//   });
// };

// https://gist.github.com/Nachasic/0431415eec47b4bd090a65bade6e8597

const arr = ["akshay", "bapaye"];

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const _data = {
    message: message,
    messages: messages,
    sendBtnFlag: message || message.length < 1,
  };
  const [Ui, setUi] = useState(null);

  // console.log(Ui);
  console.log("https://jasonformat.com/wtf-is-jsx/");

  useEffect(() => {
    fetch("chat-main.xml")
      .then((res) => res.text())
      .then((res) => {
        // console.log(res);
        const parser = new DOMParser();
        const doc = parser.parseFromString(res, "application/xml");
        // console.log(doc);
        // console.log(
        //   document.evaluate("/template", doc, null, XPathResult.ANY_TYPE, null),

        //   doc.querySelectorAll("Import")[0].attributes
        // );
        const jsonSchema = xml2json(doc, {
          ignoreTags: [],
        });
        console.log(JSON.stringify(jsonSchema));
        setUi(jsonSchema);
      });
  }, []);

  const buttonClicked = (e) => {
    // console.log(e);

    // console.log(inject("", _data));

    switch (e.target?.name) {
      case "btnGo":
        // if (user.length < 4 || room.length < 4) {
        //   console.log("> 4 reqd");
        //   return;
        // }

        console.log("processed");

        break;
    }
  };

  const textChanged = (e) => {
    // console.log(e);

    switch (e.target?.name) {
      case "txtmsg":
        // console.log("change in username");
        setMessage(e.target.value);
        break;
    }
  };

  return (
    <div className="App2">
      <GlobalProvider
        state={{ data: _data, fns: { buttonClicked, textChanged } }}
      >
        {Ui ? <UIBuilder Ui={Ui} /> : "Loading..."}
      </GlobalProvider>
    </div>
  );
}

// function App() {
//   const [user, setUser] = useState("");
//   const [room, setRoom] = useState("");

//   const _data = {
//     user: user,
//     room,
//     chatBtnFlag: user.length < 4 || room.length < 4,
//   };
//   const [Ui, setUi] = useState(null);

//   // console.log(Ui);
//   console.log("https://jasonformat.com/wtf-is-jsx/");

//   useEffect(() => {
//     fetch("chat-intro.xml")
//       .then((res) => res.text())
//       .then((res) => {
//         // console.log(res);
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(res, "application/xml");
//         // console.log(doc);
//         // console.log(
//         //   document.evaluate("/template", doc, null, XPathResult.ANY_TYPE, null),

//         //   doc.querySelectorAll("Import")[0].attributes
//         // );
//         const jsonSchema = xml2json(doc, { ignoreTags: ["footer2"] });
//         console.log(JSON.stringify(jsonSchema));
//         setUi(jsonSchema);
//       });
//   }, []);

//   const buttonClicked = (e) => {
//     // console.log(e);

//     switch (e.target?.name) {
//       case "btnGo":
//         if (user.length < 4 || room.length < 4) {
//           console.log("> 4 reqd");
//           return;
//         }

//         console.log("processed");

//         break;
//     }
//   };

//   const textChanged = (e) => {
//     // console.log(e);

//     switch (e.target?.name) {
//       case "txtuser":
//         // console.log("change in username");
//         setUser(e.target.value);
//         break;
//       case "txtroom":
//         // console.log("change in roomname");
//         setRoom(e.target.value);
//         break;
//     }
//   };

//   return (
//     <div className="App2">
//       <GlobalProvider
//         state={{ data: _data, fns: { buttonClicked, textChanged } }}
//       >
//         {Ui ? <UIBuilder Ui={Ui} /> : "Loading..."}
//       </GlobalProvider>
//     </div>
//   );
// }

export default App;
