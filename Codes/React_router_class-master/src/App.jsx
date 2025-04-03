import { Routes, Route } from 'react-router-dom'
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Services from './component/Services';
import Navbar from './component/Navbar'
import PageNotFound from './component/PageNotFound';
import Product from './component/Product';
import Shirt from './component/products/Shirt';
import Jeans from './component/products/Jeans';
import Users from './component/Users';
import UserDetail from './component/UserDetail';
import Admin from './component/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Services />} />
        <Route path='/product' element={<Product />}>
          <Route index element={<Shirt />} />
          <Route path='shirt' element={<Shirt />} />
          <Route path='jeans' element={<Jeans />} />
        </Route>
        <Route path='/user' element={<Users />} >
          <Route path=':id' element={<UserDetail />} />
        </Route>
        {/* </Route> */}
        {/* <Route path='/user/2' element={<UserDetail />} />
        <Route path='/user/3' element={<UserDetail />} /> */}
        <Route path='/user/admin' element={<Admin />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
