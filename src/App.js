import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Detail from './pages/Detail'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Test from './pages/Test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
            <Route index element={<Home />} />
            <Route path='video'>
              <Route index element={<Detail />} />
            </Route>
            <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
