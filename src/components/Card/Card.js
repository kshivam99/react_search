import React from "react";
import { useResult } from "../../reducer/searchReducer";
import styles from "./Card.module.css";

function Card({ id, name, items, address, pincode, isHovered, keyboard }) {
  const ref = React.useRef();
  const { state } = useResult();
  const pattern = state.searchPattern;

  React.useEffect(()=>{
      if(isHovered){
          ref.current.scrollIntoView();
      }
  })

  function formatText(input, pattern){
    let temp = input.split(pattern);
    let output;
    output = temp.map((item, index)=>{
        if(index===temp.length-1){
            return item;
        }
        else{
            return item +`<span style="color:#3B82F6; font-weight:800">${pattern}</span>`;
        }
    })
    return output.join("");
  }

  return (
    <div className={keyboard?isHovered?`${styles.card1} ${styles.card1hover}`:styles.card1:styles.card0} ref={ref}>
      <h4 className={styles.id}>{id}</h4>
      <p className={styles.name} dangerouslySetInnerHTML={{__html: formatText(name,pattern)}}/>
      {JSON.stringify(items).toUpperCase().includes(pattern.toUpperCase()) && (
        <p><span className={styles.dot}></span><strong>"{pattern}"</strong> found in items</p>
      )}
      <p>{address}</p>
      <small>{pincode}</small>
    </div>
  );
}

export default Card;
