import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Store/StoreProvider";
import { Button, NumberOne, NumberTwo, NumberThree } from "..";
import styles from "./mainViev.module.scss";

const Main = () => {
  const { number, setNumber } = useContext(StoreContext);

  const [btnId, setBtnId] = useState(null);

  const numberUp = () => setNumber((n) => n + 1);
  const numberDown = () => setNumber((n) => n - 1);

  useEffect(() => {}, []);

  useEffect(() => {
    const interval = setInterval((_) => {
      if (btnId === "left") {
        numberDown();
      } else if (btnId === "right") {
        numberUp();
      } else {
        return;
      }
    }, 1000);
    return (_) => clearInterval(interval);
  });

  useEffect(() => {
    if (number === 0) {
      setBtnId(null);
    }
  }, [number]);

  const handleClickRight = (e) => {
    if (btnId) {
      return;
    } else {
      setNumber(-4);
      setBtnId(e.target.id);
    }
  };
  const handleClickLeft = (e) => {
    if (btnId) {
      return;
    } else {
      setNumber(4);
      setBtnId(e.target.id);
    }
    console.log("left");
  };

  const handleReset = () => {
    if (number === 0) {
      setBtnId(null);
      setNumber(null);
    } else {
      setBtnId(null);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.buttons}>
          <div>
            <Button
              type="button"
              name="w lewo"
              onClick={handleClickLeft}
              id="left"
            />
            <Button
              type="button"
              name="w prawo"
              onClick={handleClickRight}
              id="right"
            />
          </div>
          <div>
            <Button
              type="button"
              name="reset"
              onClick={handleReset}
              id="reset"
            />
          </div>
        </div>
        <div className={styles.content}>
          <NumberOne />
          <NumberTwo />
          <NumberThree />
        </div>
      </div>
    </div>
  );
};
export default Main;
