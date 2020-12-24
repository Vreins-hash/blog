import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';


// react fragment allows us to simulate a Html tag

class App extends React.Component {
  render() {
    return (
     <React.Fragment>
       <Navbar/>
       <Switch>
        <Route exact path="/" component={ProductList}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         <Route component={Default} />
       </Switch>
       <Modal/>
     </React.Fragment> 
      )
  }
}


export default App;


//context.api