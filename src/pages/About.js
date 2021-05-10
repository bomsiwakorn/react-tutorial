import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const About = () => {
    // const [news, setNews] = useState([])

    const getNewsService = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get('/news?page=1&per_page=3')
                return resolve(response.data)
            } catch (error) {
                return reject(error.response.data)
            }
        })
    }

    const { isLoading, error, data, isFetching } = useQuery('getData', async () =>
        await getNewsService()
    )
    console.log(data);


    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    // useEffect(() => {
    //     getNews()
    // }, [])
    return (
        <div>
            <h1>About Page</h1>
            {
                data.data.map((news,index) => {
                    return (
                        <li key={index}>{news.topic}</li>
                    )
                })
            }
            {isFetching ? 'กำลังอัปเดต' : null}
        </div>
    )
}

export default About
