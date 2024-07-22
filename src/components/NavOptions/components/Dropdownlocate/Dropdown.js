import React, { useRef, useState } from 'react'
import '../../../../styles/Navoption.css'
function Dropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null)
    const handleDropDownFocus = (state) => {
        setOpen(!state);
    };
    const handleClickOutsideDropdown = (e) => {
        if (open && !dropdownRef.current?.contains(e.target)) {
            setOpen(false)
        }
    }
    window.addEventListener("click", handleClickOutsideDropdown)
  return (
    <div className="app-drop-down-container" ref={dropdownRef}>
    <button onClick={(e) => handleDropDownFocus(open)}>City,Hotel,Place to go</button>
    {open && (
        <ul>
            <text>Popular Destination</text>
            <a href=''>
                <h1>Pattaya</h1>
                <h2>Chonburi,Thailand</h2>
            </a>
            <a href=''>
                <h1>Bangkok</h1>
                <h2>Thailand</h2>
            </a>
        </ul>
    )}
</div>
  )
}

export default Dropdown