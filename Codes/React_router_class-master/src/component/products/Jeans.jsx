import React from 'react'
import ProductCard from './ProductCard'

function Jeans() {
    const jeans = [
        { id: 1, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f7.jpg', title: 'Petal Design Plasso', price: '$10' },
        { id: 2, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n6.jpg', title: 'Lined Trouser', price: '$25' },
        { id: 3, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f7.jpg', title: 'Petal Design Plasso', price: '$10' },
        { id: 4, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n6.jpg', title: 'Lined Trouser', price: '$25' },
        { id: 5, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/f7.jpg', title: 'Petal Design Plasso', price: '$10' },
        { id: 6, imgsrc: 'https://raw.githubusercontent.com/Yuvraj2172/Summer-Internship/master/assets/products/n6.jpg', title: 'Lined Trouser', price: '$25' },

    ]
  return (
    <div>
          <div className='ml-5 grid grid-cols-3'>
              {jeans.map((item) => {
                  return (
                      <ProductCard imgsrc={item.imgsrc} title={item.title} price={item.price} />
                  )
              })}
          </div>
    </div>
  )
}

export default Jeans
