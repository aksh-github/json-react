import { useGlobal } from "./GlobalContext";
import { buildUI } from "./UIBuilder";
import Count from "./Count";

const MixMatch = (props) => {
  const globalContext = useGlobal();
  const { custom, extras, ...newProps } = props;
  //   console.log(props);
  return (
    <div {...newProps} className="mixmatch">
      <h3>Mix n Match Component</h3>
      <Count />
      {buildUI(newProps.children[0], {
        ...globalContext,
        ...extras,
      })}
      {buildUI(newProps.children[1], {
        ...globalContext,
        ...extras,
      })}
    </div>
  );
};

export default MixMatch;
