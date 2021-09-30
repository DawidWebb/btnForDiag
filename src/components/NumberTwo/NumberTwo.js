import { useContext } from "react";
import { StoreContext } from "../../Store/StoreProvider";

const NumberTwo = () => {
  const { number } = useContext(StoreContext);
  const compenentViev =
    number === -3 || number === 3 || number === 0 ? <p>2</p> : "";

  return (
    <>
      <div>{compenentViev}</div>
    </>
  );
};
export default NumberTwo;
