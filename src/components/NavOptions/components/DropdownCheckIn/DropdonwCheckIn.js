import { DatePicker } from 'antd';
import moment from 'moment';
import { CalendarOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react'

function DropdonwCheckIn() {
    const [dates, setDates] = useState();
    const { RangePicker } = DatePicker;

    const [openCheckIn, setOpenCheckIn] = useState(false);
    const dropdownCheckIn = useRef(null)
    const handleDropDownCheckInFocus = (state) => {
        setOpenCheckIn(!state);
    };
    const handleClickOutsideDropdownCheckIn = (e) => {
        if (openCheckIn && !dropdownCheckIn.current?.contains(e.target)) {
            setOpenCheckIn(false)
        }
    }
    window.addEventListener("clickCheckIn", handleClickOutsideDropdownCheckIn)
    return (
        <div className="calender-drop-down-container" ref={dropdownCheckIn}>
            <buttoncheckin onClick={(e) => handleDropDownCheckInFocus(openCheckIn)}>
                <CalendarOutlined />
                Check-in
            </buttoncheckin>
            {openCheckIn && (
                <ul>
                    <div className='calender'>
                        <text>Check-in</text>
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

export default DropdonwCheckIn