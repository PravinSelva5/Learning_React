import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

function Home() {
    const url =`https://5f62e6ca363f0000162d7cd7.mockapi.io/products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data:null,
            error:false
        })
        
        axios.get(url).then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error:false
            })
        })
        .catch(() => {
            setProducts({
                loading: false,
                data: null,
                error: true
            })
        })

    }, [url])


    let content = null

    if(products.error){
        content = <p>If there was an error, please refresh or try again later</p>
    }


    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = 
            products.data.map((product, key) =>
            <div>
                <ProductCard
                    product={product}
                />
            </div>
            )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
        </div>

    )
}

export default Home