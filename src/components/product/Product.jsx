import  { Component } from 'react'
import './product.css'

 class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="product"> 
            <h1 className="product__title">Наша <span style={{color:"#EF7C00"}}> продукция</span></h1>
             <div className="product__content__left">
                <button>Ламинатные тубы</button>
                <button>Экструзионные тубы</button>
                <button>Другая упаковка</button>
             </div>
          <div className="product__content">
           <img src="public/4 1.png" alt="" />
           <img src="public/2.png" alt="" />
           <img src="public/3.png" alt="" />
           <img src="public/4.png" alt="" />
           <img src="public/5.png" alt="" />
      </div>
      <div className="product__content__left"><button className='cont__btn pass'>Перейти в каталог</button></div>
      
      </div>
      </div>
         
    )
  }
}

export default Product