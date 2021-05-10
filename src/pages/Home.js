import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [version, setVersion] = useState('')

    const getVersionService = () => {
        return new Promise(async (resolve,reject) => {
            try {
                const response = await axios.get('/version')
                return resolve(response.data)
            } catch (error) {
                return reject(error.response.data)
            }
        })
    }
    const getVersion = async () => {
        try {
            const response = await getVersionService()
            console.log(response);
            setVersion(response.data.version)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getVersion()
    }, [])
    return (
        <div>
            <h1>Home Page</h1>
            <h2>{version}</h2>
        </div>
    )
}

export default Home
