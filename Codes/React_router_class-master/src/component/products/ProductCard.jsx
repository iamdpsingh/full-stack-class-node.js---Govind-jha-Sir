import React from 'react'

function ProductCard({ imgsrc, title, price }) {
    return (
        <>
            <div className="w-full max-w-sm bg-gray-700 rounded-3xl shadow-2xl mb-5">
                <span href="#">
                    <img src={imgsrc} alt="" className='rounded-t-3xl shadow-2xl'/>
                </span>
                <div className="px-5 pb-5">
                    <span href="#">
                        <h5 className="text-2xl mb-2 text-center font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </span>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                        <button href="#" className="text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
