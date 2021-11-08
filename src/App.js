import './App.css';
import PageBreak from './components/PageBreak/PageBreak';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Champions from './components/Champions/Champions';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App" data-testId="App-testID" >
      <Header />
      <Banner />
      <About />
      <Champions />
      <PageBreak title={"Blog"}/>
      <Blog />
    </div>
  );
}

export default App;
