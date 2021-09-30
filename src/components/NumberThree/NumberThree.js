import { useContext } from "react";
import { StoreContext } from "../../Store/StoreProvider";

const NumberThree = () => {
  const { number } = useContext(StoreContext);
  const compenentViev =
    number === -2 || number === 4 || number === 0 ? <p>3</p> : "";

  return (
    <>
      <div>{compenentViev}</div>
    </>
  );
};
export default NumberThree;
