import { Component } from 'react'
import './header.css'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropdown: null
    };
  }

  handleDropdownClick(menu) {
    this.setState((prevState) => ({
      activeDropdown: prevState.activeDropdown === menu ? null : menu
    }));
  }

  render() {
    const { activeDropdown } = this.state;

    return (
      <div className="container">
      <header className="header">
        <div className="logo"><img src="public/logo (2).png" alt="" /></div>
        <nav className="nav">
          <ul>
            <li onClick={() => this.handleDropdownClick('Продукция')}>
              Продукция
              {activeDropdown === 'Продукция' && (
                <ul className="dropdown">
                  <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
              )}
            </li>
            <li onClick={() => this.handleDropdownClick('Сертификаты')}>
              Сертификаты
              {activeDropdown === 'Сертификаты' && (
                <ul className="dropdown">
                  <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
              )}
            </li>
            <li onClick={() => this.handleDropdownClick('Наша команда')}>
              Наша команда
              {activeDropdown === 'Наша команда' && (
                <ul className="dropdown">
                  <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
              )}
            </li>
            <li onClick={() => this.handleDropdownClick('О нас')}>
              О нас
              {activeDropdown === 'О нас' && (
                <ul className="dropdown">
                 <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
              )}
            </li>
            <li onClick={() => this.handleDropdownClick('Новости')}>
              Новости
              {activeDropdown === 'Новости' && (
                <ul className="dropdown">
                  <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
              )}
            </li>
            <li onClick={() => this.handleDropdownClick('Вакансии')}>
              Вакансии
              {activeDropdown === 'Вакансии' && (
                <ul className="dropdown">
                 <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
              )}
            </li>
            <li onClick={() => this.handleDropdownClick('Контакты')}>
              Контакты
              {activeDropdown === 'Контакты' && (
                <ul className="dropdown">
                  <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <button className='hed__btn'>
            <img src="public/language.png" alt="" />
        </button>
      </header>
      </div>
    );
  }
}
export default Header