import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import courseService from '../services/Course.service'
import axios from 'axios'

const Product = () => {

    const [products, setProduct] = useState([])
    const [error, setError] = useState(null)
    const cancelToken = useRef(null)

    const getProducts = async () => {
        try {
            // เรียกใช้service
            const response = await courseService.findAll()
            // เมื่อstatusจากฝั่งหลังบ้านส่งสำเร็จมา dataจะเก็บลงตัวแปลresponse
            console.log(response.data);

            setProduct(response.data)
        } catch (error) {
            console.log(error);
            // เมื่อstatusจากฝั่งหลังบ้านส่งerrorมา dataจะเก็บลงตัวแปลerror
            setError(error.message)
        }
    }

    useEffect(() => {
        cancelToken.current = axios.CancelToken.source()
        getProducts()
        return () => {
            console.log('exit product page');
            cancelToken.current.cancel()
        }
    },[])

    return (
        <div>
            <h1 style={{color: 'red'}}>{error}</h1>
            <h1>Product Page</h1>
            <h2>สินค้าทั้งหมด</h2>
            <table style={{border: '1px solid #000'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Detail</th>
                        <th>View</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((product,index) => {
                        return (<tr key={index}>
                                    <td>{index}</td>
                                    <td>{product.id}</td>
                                    <td><img width="50px" src={product.picture} alt="Product"/></td>
                                    <td>{product.title}</td>
                                    <td>{product.detail}</td>
                                    <td>{product.view}</td>
                                    <td>{product.date}</td>
                                    <td>
                                    <Link to={`/detail/${product.id}/title/${product.title}`}>
                                        ดูรายละเอียด
                                    </Link>
                                    </td>
                                </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Product
