import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

/**
 * Explanation on why the structure of this file is diferrent from the one on the video:
 * https://www.udemy.com/course/django-with-react-an-ecommerce-website/learn/lecture/24573312#questions/16168210
 * 
 * Documentation: https://reactrouter.com/docs/en/v6/getting-started/overview
 */
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            {" "}
            <Route path="/" element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/product/:id' element={<ProductScreen />}/>
            <Route path='/cart/:id?' element={<CartScreen />}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
