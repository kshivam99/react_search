import React from 'react'
import Card from "../Card/Card"
import styles from "./DropDown.module.css"
import { useResult } from '../../reducer/searchReducer'


function DropDown({isActive}) {
    const { state } = useResult();
    const [hoveredIndex, setHoveredIndex] = React.useState(0);
    const [keyboard, setKeyboard] = React.useState(false);

    function keyHandler(e){
        setKeyboard(true);
        if(e.key==="ArrowDown") setHoveredIndex(prev=>prev===state.result.length-1?prev:prev+1)
        if(e.key==="ArrowUp") setHoveredIndex(prev=>prev===0?prev:prev-1)
    }

    React.useEffect(() => {
        window.addEventListener("keydown", keyHandler);
        window.addEventListener("mousemove", ()=>setKeyboard(false));
        return () => {
          window.removeEventListener("keydown", keyHandler);
          window.removeEventListener("mousemove", ()=>setKeyboard(false));
        };
      });
    
    return (
        <div style={{display:isActive?"":"none"}} className={styles.container}>
            {
                state.result.map((item, index)=>(
                    <Card key={item.id} id={item.id} name={item.name} items={item.items} address={item.address} pincode={item.pincode} isHovered={hoveredIndex===index} keyboard={keyboard}/>
                ))
            }
            {
                !state.result.length && "Nothing FOund"
            }
        </div>
    )
}

export default DropDown
