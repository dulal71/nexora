import { getProducts } from '@/lib/api/getProducts';
import React from 'react';

const Products =async () => {
    const {data:products} =await getProducts()
    console.log(products);
    return (
        <div>
            
        </div>
    );
};

export default Products;