
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/header/Navbar';
import BookSection from './components/showcase/BookSection';



function App() {
  return (
    <div>        
      <Navbar />
      <Banner/> 
      <BookSection/>
    </div>
  );
}

export default App;
