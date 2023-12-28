import '../styles/App.scss';
import Navigation from '../components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Routes>
          <Route path='/' element={ <HomePage/> }></Route>
          <Route path='/profile' element={ <ProfilePage/> }></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
