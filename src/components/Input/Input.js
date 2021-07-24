import React from 'react';
import styles from "./Input.module.css"
import { useResult } from '../../reducer/searchReducer'

function Input({setIsActive}) {
    const { dispatch } = useResult();

    function inputHandler(e){
        if(e.target.value.length){
            setIsActive(true);
        }
        else{
            setIsActive(false);
        }
        dispatch({type:"SET_SEARCH_PATTERN", payload:e.target.value})
        dispatch({type:"FILTER_RESULT", payload:e.target.value});
    }

    return (
        <div>
            <input className={styles.searchBox} type="search" onChange={inputHandler} placeholder="Search Users by ID, address, name .."/>
        </div>
    )
}

export default Input
