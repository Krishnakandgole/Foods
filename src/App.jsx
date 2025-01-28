import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart, Contact, Footer, Header, Porfile } from './components/index';
import './App.css';
import { About, AddToRestuarant, Blog, Home, Login, Product, Products, Recipes, Signup } from './pages';
import { toast, Flip } from'react-toastify';

function App() {
  const [cart, setCart] = useState([]);
  const [list, setList] = useState([]);

  // Adding to the cart page
  const AddTocart = (foods) => {
    const cartItems = cart.find((finditem) => finditem.id === foods.id);
    if (cartItems) {
      const products = cart.map((product) => (
        product.id === foods.id ? { ...cartItems, quantity: product.quantity + 1 } : product
      ));
      setCart(products)
    } else {
      setCart([...cart, { ...foods, quantity: 1 }])
    }
    toast.success('Successfully add to cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      });
  }


  const AddToList = (foods) => {
    const cartItems = list.find((finditem) => finditem.id === foods.id);
    if (cartItems) {
      const products = list.map((product) => (
        product.id === foods.id ? { ...cartItems, quantity: product.quantity + 1 } : product
      ));
      setList(products)
    } else {
      setList([...list, { ...foods, quantity: 1 }])
    }
    toast.success('SuccessFully Added to you cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      });
  }

  // Removing or Delect from the cart page
  const handleremove = (id) => {
    const update = cart.filter((item) => (
      item.id !== id
    ))
    const updatelist = list.filter((item) => (
      item.id !== id
    ))
    setCart(update)
    setList(updatelist)
    console.table(cart)
  }

  // Increasing the quantity of the product value

  const handleInc = (id) => {
    const update = cart.map((item) =>(
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ));
    setCart(update)
  }
  const handleDec = (id) =>{
    const update = cart.map((item) =>(
      item.id === id && item.quantity > 1? {...item, quantity: item.quantity - 1} : item
    ));
    setCart(update)
  };

  const totalCost = () =>{
    const update = cart.reduce((item, itemQuentity) => (
       item  + itemQuentity.price * itemQuentity.quantity
    ), 0)
    return update;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home AddTocart={AddTocart} AddToList={AddToList} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes AddTocart={AddTocart} AddToList={AddToList} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products AddTocart={AddTocart} AddToList={AddToList} />} />
          <Route path="/product" element={<Product AddTocart={AddTocart} AddToList={AddToList} />} />
          <Route path="/profile" element={<Porfile list={cart} handleremove={handleremove} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} handleremove={handleremove} handleInc={handleInc} handleDec={handleDec} totalCost={totalCost} />}
          />
          <Route path="/addtorestuarant" element={<AddToRestuarant />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
