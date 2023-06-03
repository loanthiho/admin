import './App.css';
import Header from './components/header';
import Show from './components/Show_product';
import Admin from './components/Admin';
import ProductDetail from './components/ProductDetail';
import { Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
         <Header/>
         <Routes>
         <Route path='/' element={<Show/>}/>
            {/* <Route path='/Cart' element={<Cart/>}/> */}
            <Route path='/Admin' element={<Admin/>}/>;
            <Route path="/products/:id" component={ProductDetail} />
         </Routes>
    </div>
     
  );
}

export default App;
