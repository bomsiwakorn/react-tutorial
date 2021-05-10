import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import courseService from '../services/Course.service'
const Detail = () => {
    const {id, title} = useParams()
    const [details, setDetail] = useState([])

    // const getDetailService = () => {
    //     return new Promise(async (resolve,reject) => {
    //         try {
    //             const response = await axios.get(`/course/${id}`)
    //             return resolve(response.data)
    //         } catch (error) {
    //             return reject(error.response.data)
    //         }
    //     })
    // }
    const getDetail = async () => {
        try {
            const response = await courseService.findOne(id)
            console.log(response.data);
            setDetail(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getDetail()
    }, [])
    return (
        <div>
            <h1>{id}</h1>
            <h1>{title}</h1>
            {
                details.map((detail,index) => {
                    return (
                        <li key={index}>{detail.ch_title}</li>
                    )
                })
            }
        </div>
    )
}

export default Detail
