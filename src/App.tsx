import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import WorkPage from './components/WorkProjects/WorkPage';
import BackgroundPage from './components/Background/BackgroundPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />          
          <Route path='/work' element={<WorkPage/>} />          
          <Route path='/background' element={<BackgroundPage/>} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
