import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import SinglePage from './component/watch/SinglePage';
import HomePage from './home/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='singlepage/:id' element={<SinglePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
