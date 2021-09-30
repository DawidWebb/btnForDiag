import { useContext } from "react";
import { StoreContext } from "../../Store/StoreProvider";
import styles from "../NumberOne/numbers.module.scss";

const NumberThree = () => {
  const { number } = useContext(StoreContext);
  const compenentViev =
    number === -2 || number === 4 || number === 0 ? <p>3</p> : "";

  return (
    <>
      <div className={styles.wrapper}>{compenentViev}</div>
    </>
  );
};
export default NumberThree;
