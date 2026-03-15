import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}

export default Tabs;
