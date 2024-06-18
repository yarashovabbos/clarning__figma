import './covid.css'

const Covid = () => {
  return (
   <div className="container">
    <div className='covid'>
        <div className="john">
          <img src="src/components/covid/img/IMAGE (11).png" alt="" />
        </div>
        <div className="doe">
          <h6>Covid-19 sanitization</h6>
          <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
          <p className='paro'>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
          <div className='cov'>
                  <button className='btn__cov'>Get a free quote</button>
                  <img src="src/components/covid/img/IMAGE (7).png" alt="" />
                  <div className="num">
                    <p className='p'>
                        Call us now
                    </p>
                    <h4 className='h4'>
                        (414) 567 - 2109
                    </h4>
                  </div>
          </div>
    </div>
   
   </div>
    <img className='vector' src="src/components/covid/img/Rectangle.png" alt="" />
   </div>
   
  )
}

export default Covid