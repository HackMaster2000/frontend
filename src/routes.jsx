import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasePage from './pages/BasePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ShopPage from './pages/ShopPage';
import ThankyouPage from './pages/ThankyouPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} exact />
          {/* <Route path="/login/shipping" element={<ShippingPage />} exact /> */}
          <Route path="/register" element={<RegisterPage />} exact />
          <Route path="/blog" element={<BlogPage />} exact />
          <Route path="/cart" element={<CartPage />} exact />
          <Route path="/checkout" element={<CheckoutPage />} exact />
          <Route path="/contact" element={<ContactPage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/services" element={<ServicesPage />} exact />
          <Route path="/shop" element={<ShopPage />} exact />
          <Route path="/profile" element={<ProfilePage />} exact />
          <Route path="/product/:productId" element={<ProductPage />} exact />
          <Route path="/thankyou" element={<ThankyouPage />} exact />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
