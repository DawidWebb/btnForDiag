import { useContext } from "react";
import { StoreContext } from "../../Store/StoreProvider";
import styles from "../NumberOne/numbers.module.scss";

const NumberTwo = () => {
  const { number } = useContext(StoreContext);
  const compenentViev =
    number === -3 || number === 3 || number === 0 ? <p>2</p> : "";

  return (
    <>
      <div className={styles.wrapper}>{compenentViev}</div>
    </>
  );
};
export default NumberTwo;
