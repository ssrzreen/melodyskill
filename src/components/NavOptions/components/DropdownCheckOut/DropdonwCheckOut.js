import { DatePicker } from 'antd';
import moment from 'moment';
import { CalendarOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react'

function DropdonwCheckOut() {
    const [dates, setDates] = useState();
    const { RangePicker } = DatePicker;


    const [openCheckOut, setOpenCheckOut] = useState(false);
    const dropdownCheckOut = useRef(null)
    const handleDropDownCheckOutFocus = (state) => {
        setOpenCheckOut(!state);
    };
    const handleClickOutsideDropdownCheckOut = (e) => {
        if (openCheckOut && !dropdownCheckOut.current?.contains(e.target)) {
            setOpenCheckOut(false)
        }
    }
    window.addEventListener("clickCheckOut", handleClickOutsideDropdownCheckOut)
    return (
        
        <div className="calender-drop-down-container" ref={dropdownCheckOut}>
        <buttoncheckout onClick={(e) => handleDropDownCheckOutFocus(openCheckOut)}>
            <CalendarOutlined />
            Check-out
            </buttoncheckout>
            {openCheckOut && (
                <ul>
                    <div className='calender'>
                        <text>Check-out</text> 
                        <RangePicker 
                        onChange={(values) => {
                            setDates(values.map(item => {
                                return moment(item).format('YYYY-DD-MM')
                            }))
                        }}
                        />
                    </div>
                </ul>
            )}
        </div>


        
    )
}

export default DropdonwCheckOut