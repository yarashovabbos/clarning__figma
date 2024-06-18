import './Section.css'
const section = () => {
  return (
    <div className="container">
      <section className='section'>
        <div className="section__text">
            <h1>
          Quality cleaning <br /> for your home
        </h1>
        <p className='par'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
         <div className='colc'>
                  <button className='btn__section'>Get a free quote</button>
                  <img src="src/components/blok/img/IMAGE (7).png" alt="" />
                  <div className="number">
                    <p>
                        Call us now
                    </p>
                    <h4>
                        (414) 567 - 2109
                    </h4>
                  </div>
                </div>
                </div>
                <div className='section__img'>
                  <img className='sec__img' src="src/components/blok/img/IMAGE (5).png" alt="#" />
         </div>
        
      </section>
    </div>
  )
}
export default section