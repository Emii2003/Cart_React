// import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'
import './Search.css'

function Search(){
    const [searchValue, setSearchValue] = useState('')
    return(
        <form action="" className='search_bar'>
            <input type="search" placeholder="Buscar produtos" 
            className="search_input" onChange={({target}) => setSearchValue(target.value)}
            required/>

            { searchValue }
            <button type="submit" className="search_button">
                <BiSearchAlt/>
            </button>
        </form>
    )
}

export default Search