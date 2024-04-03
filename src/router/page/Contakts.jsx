import { NavLink, Outlet } from 'react-router-dom';




function Contacts() {

  return (
    <div className="App">
    <div  className="Header">
          <div className="sigin">
            <a href='/#'>Войти</a>
            <a href='/#'>Регистрация</a>
          </div>
          <div className="sigin">Fake Store</div>
          <div className="sigin">
            <NavLink to={`/`}>Главная</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
            <NavLink to='/market/basket'>Корзина</NavLink>
          </div>
    </div>
    <div  className="Content-wrapper">
       Контакты
  
    </div>
    <div  className="Footer">
            Footer
    </div>
    </div>
  );
}

export default Contacts;
