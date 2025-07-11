import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import WorkPage from './components/WorkProjects/WorkPage';
import BackgroundPage from './components/Background/BackgroundPage';
import ContactPage from './components/Contact/ContactPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />          
          <Route path='/work' element={<WorkPage/>} />          
          <Route path='/background' element={<BackgroundPage/>} />          
          <Route path='/contact' element={<ContactPage/>} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
