import React, { useState } from 'react'
import { TeamOutlined } from '@ant-design/icons';
import '../../../NavOptions/components/DropdownRoom/style/DropdownRoom.css'
import Room from './components/Room/Room';
import Adults from './components/Adults/Adults';
import Children from './components/Children/Children';
function DropdownRoom() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                <TeamOutlined />
                Room
            </div>
            {isActive && (
                <div className='dropdown-content'>
                    <Room />
                    <Adults />
                    <Children />
                </div>
            )}
        </div>
    );
}

export default DropdownRoom