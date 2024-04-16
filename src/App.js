import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { fetchProducts } from './redux/Slice/basket.utils';
import { useDispatch } from 'react-redux';
import Carusel from './components/carusel/Carusel';




function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  })

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
            <NavLink to={`/contacts`}>Контакты</NavLink>
            <NavLink to='/market/basket'>Корзина</NavLink>
          </div>
    </div>
    <div className='sidebar'>
            <NavLink to={`/market/cataloge`}>Каталог</NavLink>
            <NavLink to={`/market/electronics`}>Электроника</NavLink>
            <NavLink to={`/market/jewelery`}>Ювелирные изделия</NavLink>
            <NavLink to={`/market/mens-clothing`}>Мужская одежда</NavLink>
            <NavLink to={`/market/womens-clothing`}>Женская одежда</NavLink>
      </div>
    <div  className="Content-wrapper">
      
      <div  className='content'>
            <Carusel/>
      </div>
  
    </div>
    <div  className="Footer">
          <h2>product  by Alexey Koldashov</h2>
    </div>
    </div>
  );
}

export default App;
