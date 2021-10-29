import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Subscribe from './components/Blogs/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Blogs></Blogs>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
