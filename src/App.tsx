import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import WorkPage from './components/WorkProjects/WorkPage';
import BackgroundPage from './components/Background/BackgroundPage';
import ContactPage from './components/Contact/ContactPage';
import { ContextProvider } from './components/Context/ContextProvider';
import WorkDetailsPage from './components/WorkProjects/WorkDetailsPage';


function App() {
  return (
    <div className="App">
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />          
          <Route path='/work' element={<WorkPage/>} />          
          <Route path='/work/:id' element={<WorkDetailsPage/>} />          
          <Route path='/background' element={<BackgroundPage/>} />          
          <Route path='/contact' element={<ContactPage/>} />          
        </Routes>
      </BrowserRouter>
    </ContextProvider>

    </div>
  );
}

export default App;
