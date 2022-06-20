import { useGlobal } from "./GlobalContext";

const My = ({ from, message }) => {
  return (
    <div
      className={
        from === "me" ? "me w3-animate-bottom" : "other w3-animate-top"
      }
    >
      <div style={{ "font-size": "smaller" }}>{from === "me" ? "" : from}</div>
      <span>{message}</span>
    </div>
  );
};

// const Oter

const ChatMessages = (props) => {
  const globalContext = useGlobal();
  const { custom, extras, ...newProps } = props;

  console.log(globalContext, props);

  return (
    <div className="messages">
      tp
      {/* <For each={messages}>
        {(item, i) => <My message={item.message} from={item.from} />}
      </For> */}
    </div>
  );
};

export default ChatMessages;
