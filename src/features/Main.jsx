import React from "react";
import ProductCart from './ProductCart';
const Main = () => {
    return(
        <main className='py-5'>
            <div className="Container px-4 px-lg-5 mt-5">
                <div className = 'row gx-4 gx-lg-5 row-cols-2 row-cols-1'>
                    <div className="col mb-5">
                        <ProductCart />
                    </div>
                    <div className="col mb-5">
                        <ProductCart />
                    </div>
                    <div className="col mb-5">
                        <ProductCart />
                    </div>
                    <div className="col mb-5">
                        <ProductCart />
                    </div>
                    <div className="col mb-5">
                        <ProductCart />
                    </div>

                </div>
            </div>
        </main>    
)}