import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
           <div className='container'>
        
        <div className="con">
        <div>
            <h2>Contact Us</h2>
            <p className='con__p'>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
            <div>
            <div className="con__img">
                 <img src="src/components/contact/img/IMAGE (7).png" alt="" />
                  <div className="con__num">
                    <p className='p__num'>
                        Call us now
                    </p>
                    <h4 className='h4__num'>
                        (414) 567 - 2109
                    </h4>
                  </div>
                 
            </div>
             <img className='con__img2' src="src/components/contact/img/Rectangle (1).png" alt="" />
            <h6 className='con__h6'>
                Not convinced yet?
            </h6>
            <p className='con__par'>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
           <button className='con__btn'>Browse our packages</button>
           </div>
        </div>
          <div className="con__form">
             <div className="contact-panel">
      <div className="row">
        <div>
            <p className="name">Full name</p>
            <input type="text" placeholder="" />
        </div>
        <div>
            <p className="name">Phone number</p>
             <input type="text" placeholder="" />
        </div>
       
      </div>
      <div className="row">
         <div>
            <p className="name">Address</p>
            <input type="text" placeholder="" />
        </div>
        <div>
            <p className="name">Email</p>
             <input type="email" placeholder="" />
        </div>
       
      </div>
      <div className="row">
         <div>
            <p className="name">Requested service</p>
            <input type="text" placeholder="" />
        </div>
        <div>
            <p className="name">Day of service</p>
             <input type="text" placeholder="" />
        </div>
        
      </div>
      <div className="textra">
        <p className="name">Add a note</p>
        <textarea placeholder=""></textarea>
      </div>
      <div className="submit-row">
        <button type="submit">Submit message</button>
      </div>
    </div>
          </div>
            </div>
            </div>
    </div>
   
  )
}

export default Contact