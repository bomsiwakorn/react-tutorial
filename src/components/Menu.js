import React from 'react'
import useHover from '../hooks/useHover'

const Menu = () => {
    const [hover, mouseOver, mouseOut] = useHover() //Custom hook

    return (
        <div>
            <h1>Menu</h1>
            <img onMouseOver={mouseOver} onMouseOut={mouseOut} src="./logo192.png" alt="Logo"/>
            <h2>{hover ? "Logo React Hover" : ""}</h2>
        </div>
    )
}

export default Menu
