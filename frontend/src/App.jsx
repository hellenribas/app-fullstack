import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import AppProvider from './context/appProvider';
import Register from './pages/Register';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/home' element={ <Home /> }/>
        <Route path='/user' element={ <User /> }/>
      </Routes>
    </AppProvider>
  );
}

export default App;
