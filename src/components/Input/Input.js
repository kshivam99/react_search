import React from 'react';
import styles from "./Input.module.css"

function Input() {
    return (
        <div>
            <input className={styles.searchBox} type="search" placeholder="Search Users by ID, address, name .."/>
        </div>
    )
}

export default Input
