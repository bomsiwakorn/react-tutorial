import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    let companyName = 'SCMS'
    let companyAddress = <p>Sathorn</p>
    const showMessage = () => {
        return 'Show message function' 
    }
    const showMe = () => {
        alert('Hello React')
    }
    const users = [
        { first_name: "Siwakorn", last_name: "Jindajamorn" },
        { first_name: "Arisara", last_name: "Surakulkumthorn" }
    ]
    return (
        <div>
            <h1 style={{color: 'red', fontSize: '20px'}}>บริษัท {companyName}</h1>
            <h2 style={styles.title}>{companyAddress}</h2>
            {showMessage()}
            <div>
                <button onClick={showMe}>Click me</button>
            </div>
            <ul>
                { users.map((user,index) => {
                    return <li key={index}>{user.first_name} {user.last_name}</li>
                }) }
            </ul>

            <ul style={{display: 'flex'}}>
                <NavLink to="/">
                    <li>Home Page Link</li>
                </NavLink>
                <NavLink to="/about">
                    <li>About Page Link</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact Page Link</li>
                </NavLink>
                <NavLink to="/product">
                    <li>Product Page Link</li>
                </NavLink>
            </ul>
        </div>
    )

}
const styles = {
    title: {
        color: 'yellow'
    }
}

export default Header
