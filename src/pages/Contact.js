import React, {useState,useEffect} from 'react'

const Contact = () => {
    
    const [data, setData] = useState([])
    function test() {
        const data2 = [
            {
                categoryName: 'เสื้อ',
                product: [
                    { image_url: 'https://firebasestorage.googleapis.com/v0/b/project-shopping-janwa.appspot.com/o/Group%206.png?alt=media&token=27337f21-8c91-4461-8600-70043d208f46', product_name: 'เสื้อ1', price: 40 },
                    { image_url: '12', product_name: 'เสื้อ2', price: 40 },
                    { image_url: '134', product_name: 'เสื้อ3', price: 40 },
                    { image_url: '143', product_name: 'เสื้อ4', price: 40 }
                ]
            },
            {
                categoryName: 'กางเกง',
                product: [
                    { image_url: '1', product_name: 'กางเกง1', price: 40 },
                    { image_url: '12', product_name: 'กางเกง2', price: 40 },
                    { image_url: '134', product_name: 'กางเกง3', price: 40 },
                    { image_url: '143', product_name: 'กางเกง4', price: 40 }
                ]
            },
            {
                categoryName: 'หมวก',
                product: [
                    { image_url: '1', product_name: 'หมวก1', price: 40 },
                    { image_url: '12', product_name: 'หมวก2', price: 40 },
                    { image_url: '134', product_name: 'หมวก3', price: 40 },
                    { image_url: '143', product_name: 'หมวก4', price: 40 }
                ]
            },
            {
                categoryName: 'ถุงเท้า',
                product: [
                    { image_url: '1', product_name: 'ถุงเท้า1', price: 40 },
                    { image_url: '12', product_name: 'ถุงเท้า2', price: 40 },
                    { image_url: '134', product_name: 'ถุงเท้า3', price: 40 },
                    { image_url: '143', product_name: 'ถุงเท้า4', price: 40 }
                ]
            }
        ]
        setData(data2)
    }
    useEffect(() => {
        test()
    }, [])
    return (
        <div>
            <h1>Contact Page</h1>
            {
                data.map((category, index) => {
                    return (
                        <div key={index} style={{ width: '90%', background: '#757575' }}>
                            <h1>{category.categoryName}</h1>
                            <div style={{ display: 'flex' }}>
                                {
                                    category.product.map((product, i) => {
                                        return (
                                            <div key={i}>
                                                <div><img src={product.image_url} alt="" /></div>
                                                <div>{product.product_name}</div>
                                                <div>{product.price}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Contact
