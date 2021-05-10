import React from 'react'

const Logo = () => {
    const logo = {
        url: './logo192.png'
    }
    return (
        <div>
            <img src={logo.url} width="100" alt="Logo"/>
        </div>
    )
}

export default Logo
