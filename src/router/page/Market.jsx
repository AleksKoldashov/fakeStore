import { NavLink, Outlet } from 'react-router-dom';




function Market() {

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
      <div className='sidebar'>
            <NavLink to={`/market/cataloge`}>Каталог</NavLink>
            <NavLink to={`/market/electronics`}>Электроника</NavLink>
            <NavLink to={`/market/jewelery`}>Ювелирные изделия</NavLink>
            <NavLink to={`/market/mens-clothing`}>Мужская одежда</NavLink>
            <NavLink to={`/market/womens-clothing`}>Женская одежда</NavLink>
      </div>
      <div  className='content'>
              <Outlet/>
      </div>
  
    </div>
    <div  className="Footer">
            Footer
    </div>
    </div>
  );
}

export default Market;
