import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/ManageOrders'>
            <ManageOrders></ManageOrders>
          </Route>

          <Route path='/Myorders'>
            <MyOrders></MyOrders>
          </Route>

          <Route path='/addService'>
            <AddService></AddService>
          </Route>

          <Route exact path='/logIn'>
            <Login></Login>
          </Route>

          <Route path='/serviceDetails/:id'>
            <ServiceDetail></ServiceDetail>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>




    </div>
  );
}

export default App;
