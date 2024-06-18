import './header.css';

const Header = () => {
  return (
        <div className="container" >
           <header className="header">
            <div className="logo">
              <img src="src/components/header/img/IMAGE (6).png" alt="#" />
            </div>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link" href="#">Home</a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#">About</a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#">Services</a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#">Articles</a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="buud">
              <a className="nav__link" href="#">Cart (0)</a>
              <button className='btn__nav'>Get a free quote</button>
            </div>
           </header>
        </div>
  )
}
export default Header