import { useContext } from "react";
import { StoreContext } from "../../Store/StoreProvider";

import styles from "./numbers.module.scss";

const NumberOne = () => {
  const { number } = useContext(StoreContext);
  const compenentViev =
    number === -4 || number === 2 || number === 0 ? <p>1</p> : "";

  return (
    <>
      <div className={styles.wrapper}>{compenentViev}</div>
    </>
  );
};
export default NumberOne;
