import React, { useEffect, useState } from "react";

import Loader from "../Components/Loader";
import Product from "./Product";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home(){

    let content = null

    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`

        let products = useAxiosGet(url)

         if(products.error)
         {
             content=<p>there was an error please try again </p>
          }           
        
        
            if(products.loading)
           {
               content=<Loader/>
            }  
            
            
            if(products.data)
            {
                content=
                products.data.map((product,key) =>
                <div key={key}>
              < ProductCard product={product} />
                </div>
                )
               
             
        
            }

    return(
        <div>
        <h1 className='font-bold text-2xl mb-3'>
          Best Selleers
        </h1>
        {content}
        </div>
    )
}
export default Home