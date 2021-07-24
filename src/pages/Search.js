import React from 'react'
import Input from '../components/Input/Input';
import DropDown from '../components/DropDown/DropDown';

function Search() {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <>
            <Input setIsActive={setIsActive}/>
            <DropDown isActive={isActive}/>
        </>
    )
}

export default Search
