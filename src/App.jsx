
import './App.css'
import { useState } from 'react'
import Header from './components/header/Header'
import Kontact from './components/kontact/Kontact'
import Compani from './components/compani/Compani'
import Carousel from './components/carousel/Carousel'
import Product from "./components/product/Product"
import Form from './components/form/Form'
import Comanda from './components/commanda/Comanda'
import Yangilik from './components/yangilik/Yangilik'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)


const images = [
  'public/image 7.png',
  'public/image 8.png',
  'public/image 9.png',
  'public/image 10.png',
  'public/image 7.png',
  'public/image 8.png',
  'public/image 11.png',
   'public/image 10.png',
  'public/image 7.png',
 'public/image 9.png',
 'public/image 8.png',
  'public/image 10.png',
];
  return (
    <div>
     <Header/>
     <Kontact/>
     <Compani/>
     <Carousel images={images}/>
     <Product/>
     <Form/>
     <Comanda/>
     <Yangilik/>
     <Footer/>
    </div>
  )
}

export default App
