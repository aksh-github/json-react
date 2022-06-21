// import { useGlobal } from "./GlobalContext";
// import React, { useState, useEffect } from "react";
// import { inject, xml2json } from "./util";
// import { UIBuilder } from "./UIBuilder";

// const My = ({ from, message }) => {
//   return (
//     <div
//       className={
//         from === "me" ? "me w3-animate-bottom" : "other w3-animate-top"
//       }
//     >
//       <div style={{ "font-size": "smaller" }}>{from === "me" ? "" : from}</div>
//       <span>{message}</span>
//     </div>
//   );
// };

// // const Oter

// const ChatMessages = (props) => {
//   const globalContext = useGlobal();
//   const { custom, extras, ...newProps } = props;

//   console.log(globalContext, props);

//   useEffect(() => {
//     fetch("chat-msg.xml")
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
//         const jsonSchema = xml2json(doc, {
//           ignoreTags: [],
//         });
//         console.log(JSON.stringify(jsonSchema));
//         setUi(jsonSchema);
//       });
//   }, []);

//   return (
//     <GlobalProvider
//       state={{ data: _data, fns: { buttonClicked, textChanged } }}
//     >
//       {Ui ? <UIBuilder Ui={Ui} /> : "Loading..."}
//     </GlobalProvider>
//   );
// };

// export default ChatMessages;
