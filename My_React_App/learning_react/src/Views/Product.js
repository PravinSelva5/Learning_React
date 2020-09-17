import React, { useState } from 'react'
import axios from 'axios'

function Product(){
    const url ='https://5f60f04c90cf8d0016558837.mockapi.io/products/$%7Bid'
    const [product, setProduct] = useState(null)

    useState( () => {
        
        axios.get(url).then(response => {
        setProduct(response.data)
        })

    }, [url])
    

    if(product){
        return (
            <div>
                <h1>{product.name}</h1>
            </div>
        )
    }

}

export default Product