import React from 'react'
import ProductCard from './ProductCard'

function Shirt() {
    const shirt = [
        { id: 1, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f1.jpg', title: 'Funky Cotton Shirt', price: '$15' },
        { id: 2, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f2.jpg', title: 'Floral Cotton Shirt', price: '$10' },
        { id: 3, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f3.jpg', title: 'Floral Cotton Shirt', price: '$8' },
        { id: 4, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f4.jpg', title: 'Valentine Shirt', price: '$20' },
        { id: 5, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f5.jpg', title: 'Floral Cotton Shirt', price: '$8' },
        { id: 6, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f6.jpg', title: 'Cotton Kaaftan', price: '$18' },
        { id: 7, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f8.jpg', title: 'Cotton Top', price: '$6' },
        { id: 8, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n1.jpg', title: 'Cotton Kurta', price: '$9' },
        { id: 9, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n2.jpg', title: 'Cotton XXl Shirt', price: '$12' },
        { id: 10, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n3.jpg', title: 'White Kurta', price: '$15' },
        { id: 11, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n4.jpg', title: 'Lycra Shirt', price: '$18' },
        { id: 12, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n5.jpg', title: 'Casual Shirt', price: '$15' },
        { id: 13, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n7.jpg', title: 'Camo Stiff Shirt', price: '$12' },
        { id: 14, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n8.jpg', title: 'Cotton Kurta', price: '$8' },
    ]
    return (
        <div>
            <div className='ml-5 grid grid-cols-3'>
                {shirt.map((item) => {
                    return (
                        <ProductCard imgsrc={item.imgsrc} title={item.title} price={item.price} />
                    )
                })}
            </div>
        </div>
    )
}

export default Shirt
