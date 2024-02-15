import { Route, Routes,Redirect } from 'react-router-dom';
import './App.css';
import About from './components/About/About.jsx';
import Cats from './components/Cats/Cats.jsx';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar.jsx';
import Prouducts from './components/Prouducts/Prouducts.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import CatgoryProduct from './components/CatgoryProduct/CatgoryProduct.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Footer from './components/Footer/Footer.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader/Loader.jsx';
import UserLists from './components/UserLists/UserLists.jsx';
import UserPage from './components/UserPage/UserPage';
import Cart from './components/Cart/Cart';
import cookie from 'react-cookies';


function App() { 
  let [user,setUser] =useState(cookie.load("token"));
  let [users,setUsers]= useState([]);
  let [loading,setLoading]= useState(true);
  let getUsers= async()=>{
    let result = await axios.get('https://fakestoreapi.com/users');
    setTimeout(()=>{
      setLoading(false)
    setUsers(result.data)
    },)

    
  }
  useEffect(()=>{
    getUsers();

  },[])
  useEffect(()=>{
    console.log(user)
  },[user])
  
  return ( 
    <div className="App">
     <Navbar user={user} setUser={setUser} />
     { loading ? ( <Loader />
     ):(
     <Routes>
      {user ?<>(
      <Route path='AlessandraStoreReactApp' element={<Home />}></Route>
      <Route path='Home' element={<Home />}></Route>
      <Route path='Products' element={<Prouducts />}></Route>
      <Route path='/list' element={<UserLists users={users} />}></Route>
      <Route path='category/:name'element={<CatgoryProduct />}></Route>
      <Route path='product/:id' element={<ProductDetails />} ></Route>
      <Route path='/list/:id' element ={<UserPage />}></Route>
      <Route path='Cart' element={<Cart/>}></Route>
      )
      </> :(<>
        <Route path='AlessandraStoreReactApp' element={<Home />}></Route>
        <Route path='Home' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
      <Route path='Register' element={<Register/>}></Route>
      <Route path='Login' element={<Login logUser={setUser}/>}></Route>
      </>)}
     </Routes>
     )}
     
     
     
     
     
     <Footer/>
    </div>
  );
}

export default App;

