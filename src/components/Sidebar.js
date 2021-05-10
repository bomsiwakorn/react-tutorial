import React, {useState, useEffect} from 'react'

const Sidebar = () => {
    const [fullname, setFullname] = useState('Bom')
    const [lastname, setLastname] = useState('Bom')
    const changeName = () => {
        setFullname('Siwakorn')
        setLastname('Jindajamorn')
    }
    useEffect(() => {
        console.log('Use Effect!');
    })
    useEffect(() => {
        console.log('Use Effect One time only!');
    },[])

    useEffect(() => {
        console.log('Use Effect when change fullname only!');
    },[fullname])

    return (
        <div>
            <h3>Sidebar</h3>
            <p>{fullname}</p>
            <p>{lastname}</p>
            <button onClick={changeName}>Change Name</button>
            <button onClick={() => setFullname('Siwakorn2')}>Change Nam2</button>
        </div>
    )
}

export default Sidebar
