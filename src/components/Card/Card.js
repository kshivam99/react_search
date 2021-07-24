import React from "react";
import { formatText } from "../../utils/utils";
import { useResult } from "../../reducer/searchReducer";
import styles from "./Card.module.css";

function Card({ id, name, items, address, pincode, isHovered, keyboard }) {
  const ref = React.useRef();
  const { state } = useResult();
  const pattern = state.searchPattern;

  React.useEffect(() => {
    if (isHovered) {
      ref.current.scrollIntoView();
    }
  });

  return (
    <div
      className={
        keyboard
          ? isHovered
            ? `${styles.card1} ${styles.card1hover}`
            : styles.card1
          : styles.card0
      }
      ref={ref}
    >
      <h4
        className={styles.id}
        dangerouslySetInnerHTML={{ __html: formatText(id, pattern) }}
      />
      <p
        className={styles.name}
        dangerouslySetInnerHTML={{ __html: formatText(name, pattern) }}
      />
      {JSON.stringify(items).toUpperCase().includes(pattern.toUpperCase()) && (
        <p>
          <span className={styles.dot}></span>
          <strong>"{pattern}"</strong> found in items
        </p>
      )}
      <p dangerouslySetInnerHTML={{ __html: formatText(address, pattern) }} />
      <small
        dangerouslySetInnerHTML={{ __html: formatText(pincode, pattern) }}
      />
    </div>
  );
}

export default Card;
