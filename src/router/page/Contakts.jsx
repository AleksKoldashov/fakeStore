import { Link, NavLink } from 'react-router-dom';
import './index.css'



function Contacts() {

  return (
    <div className="App">
    <div  className="Header">
          <div className="sigin">
            <a href='/#'>Войти</a>
            <a href='/#'>Регистрация</a>
          </div>
          <div className="sigin" style={{fontSize: '66px',  fontWeight:'700'}}>Fake Store</div>
          <div className="sigin">
            <NavLink to={`/`}>Главная</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
            <NavLink to='/market/basket'>Корзина</NavLink>
          </div>
    </div>
    <div  className="Content-wrapper">
     <span>Мой телеграмм : <Link to={'https://t.me/AlekseyKoldashov'}>@AlekseyKoldashov</Link></span> 
     <span> Анкета на HH.ru: <Link to={'https://hh.ru/resume/97f8f595ff0cb194430039ed1f7639524e4b78'}>AlekseyKoldashov</Link></span>
    </div>
    <div  className="Footer">
    <h2>product  by Alexey Koldashov</h2>
    </div>
    </div>
  );
}

export default Contacts;
