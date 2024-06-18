import './Servis.css';

const Servis = () => {
  return (
    <div className='container'>
        <div className="tetil">
            <h2>Our Services</h2>
            <button className='tetil__btn'>Explore services</button>
        </div>
        <div className="servis">
            <div className="ser">
                <img style={{marginTop: '100px'}} src="src/components/servis/img/IMAGE (8).png" alt="" />
                <h5 >House cleaning</h5>
                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="ser">
                <img src="src/components/servis/img/IMAGE (9).png" alt="" />
                <h5>Office cleaning</h5>
                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="ser">
                <img src="src/components/servis/img/IMAGE (10).png" alt="" />
                <h5>Industrial cleaning</h5>
                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
        </div>
    </div>
  )
}

export default Servis