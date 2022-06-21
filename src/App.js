import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { xml2json } from "./util";
import { UIBuilder } from "./UIBuilder";
import { GlobalProvider } from "./GlobalContext";

export const Ele = (props) => {
  return <h4 title={props.title}>{props.title}</h4>;
};

export const List = (props) => {
  return props.list.map((txt, idx) => {
    return <Ele key={"k" + idx} title={txt} />;
  });
};

const arr = ["akshay", "bapaye"];

function App() {
  const [count, setCount] = useState(19);
  const _data = {
    form: {
      list: [
        { n: "akshay", ln: "bapaye", primary: true },
        { n: "harish", ln: "b", primary: false },
        { n: " is smart boy", primary: false },
      ],
    },
    count: count,
    btnLabel: "Increase Counter",
    class: "xys",
  };
  const [Ui, setUi] = useState(null);

  // console.log(Ui);
  console.log("https://jasonformat.com/wtf-is-jsx/");

  useEffect(() => {
    fetch("templ.xml")
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        const parser = new DOMParser();
        const doc = parser.parseFromString(res, "application/xml");
        // console.log(doc);
        console.log(
          document.evaluate("/template", doc, null, XPathResult.ANY_TYPE, null),

          doc.querySelectorAll("Import")[0].attributes
        );
        const jsonSchema = xml2json(doc, { ignoreTags: [] });
        // console.log(JSON.stringify(jsonSchema));
        setUi(jsonSchema);
      });
  }, []);

  const buttonClicked = (e) => {
    // console.log(e);

    switch (e.target?.name) {
      case "btn-ctr":
        setCount((c) => c + 1);
        break;
    }
  };

  const textChanged = (e) => {
    // console.log(e);

    switch (e.target?.name) {
      case "form.list[1].n":
        console.log("e");
        break;
    }
  };

  return (
    <div className="App">
      <GlobalProvider
        state={{ data: _data, fns: { setCount, buttonClicked, textChanged } }}
      >
        {Ui ? <UIBuilder Ui={Ui} /> : "Loading..."}
      </GlobalProvider>
    </div>
  );
}

// https://gist.github.com/Nachasic/0431415eec47b4bd090a65bade6e8597

export default App;
