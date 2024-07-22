import React from 'react'
import '../../styles/Navoption.css'
import DropdonwCheckIn from './components/DropdownCheckIn/DropdonwCheckIn';
import DropdonwCheckOut from './components/DropdownCheckOut/DropdonwCheckOut';
import Dropdown from './components/Dropdownlocate/Dropdown';
import DropdownRoom from './components/DropdownRoom/DropdownRoom';
import SearchBtn from './components/SearchBtn/SearchBtn';

function NavOptions() {
    
    return (
        <div className='navoption'>
           <Dropdown />
           <DropdonwCheckIn />
           <DropdonwCheckOut />
           <DropdownRoom />
           <SearchBtn />
        </div>
    )
}

export default NavOptions