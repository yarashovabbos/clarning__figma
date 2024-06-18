import './articl.css'

const Articl = () => {
  return (
    <div className='container' >
        <div className="articl">
             <h2>Articles & resources</h2>
              <div className="art__btn">
            <button className='btn__art jud'>Get a free quote</button>
            <button className='btn__art'>Browse articles</button>
             </div>
        </div>
        <div className="img__art">
            <img src="src/components/articl/img/Frame (1).png" alt="" />
            <img src="src/components/articl/img/Frame (2).png" alt="" />
        </div>
    </div>
  )
}

export default Articl