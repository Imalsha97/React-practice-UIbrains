import './App.css';
import CountryCard from './components/CountryCard';
import Counter from './components/Counter';
import WishMessage from './components/WishMessage';
import ProductItem from './components/ProductItem';
import ShoppingCart from './components/ShoppingCart';
import UserName from './components/UserName';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AthenticationUser from './components/AthenticationUser';

function App() {
  return (
    // 
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <a href="/" className="navbar-brand">React with Bootstrap</a>
    </nav>
    {/* <i className="fa fa-user-circle fa-4x"></i>
    <i className="fab fa-facebook fa-4x text-primary"></i> */}
    {/* <CountryCard/> */}
    {/* <Counter/> */}
    {/* <WishMessage/> */}
    {/* <ProductItem/> */}
    {/* <ShoppingCart/> */}
    {/* <UserName/> */}
    {/* <LoginForm/> */}
    {/* <RegisterForm/> */}
    <AthenticationUser/>
    </>
  );
}

export default App;
