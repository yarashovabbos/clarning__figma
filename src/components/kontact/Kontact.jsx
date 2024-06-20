import  { Component } from 'react'
import './kontact.css'
export class Kontact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
       <div className="contact-content">
        <div className="cont">
            <div className='cont__blok'>
                <p className='p__1'>LEANGROUP - тубы и этикетки</p>
                <h1 className='h1__1'>Ламинатные тубы</h1>
            <p className="p__2">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do-it-Yourself).</p>
           <button className='cont__btn'>Каталог</button> <br />
            <img className='cont__img' src="public/controls.png" alt="" />
            </div>
              <div>
                <img src="public/social.png" alt="" /></div>
            
        </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Kontact
