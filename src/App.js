import './App.css';
import PageBreak from './components/PageBreak/PageBreak';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Champions from './components/Champions/Champions';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" data-testid="App-testID" >
      <Header />
      <Banner />
      <About />
      <Champions />
      <PageBreak title={"Blog"}/>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
