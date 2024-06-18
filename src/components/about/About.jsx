
import './about.css'

const About = () => {
  return (
    <div className="container">
         <div className="about">
          <h2>
            About Us
          </h2>
          <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
          <div className="card">
            <div className="blok"><img src="src/components/about/img/IMAGE (5).png" alt="" />
            <h4>1. Schedule online</h4>
            <p>Sagittis nibh scelerisque vitae egetolment <br /> vulputate sem elementum sed n.</p>
            </div>
            <div className="blok"><img src="src/components/about/img/IMAGE (6).png" alt="" />
            <h4>2. Pay online easily</h4>
            <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
            </div>
            <div className="blok"><img src="src/components/about/img/IMAGE (7).png" alt="" />
            <h4>3. Get your house cleaned</h4>
            <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
            </div>
          </div>
         </div>
         <div className="btn__card">
            <button className='btn__1'>Get a free quote</button>
            <button className='btn__2'>Explore services</button>
         </div>
    </div>
   
  )
}

export default About