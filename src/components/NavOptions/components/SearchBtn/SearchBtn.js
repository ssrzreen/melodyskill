import React from 'react'
import '../SearchBtn/SearchBtn.css'
import { SearchOutlined } from '@ant-design/icons'
function SearchBtn() {
    return (
        <div className='ButtonContainer'>
            <button className='SearchButton'>
                <SearchOutlined />
                Search</button>
        </div>
    )
}

export default SearchBtn