import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <input type='text' className='app__input' placeholder='Search Message'/>
      <br/>
      <NavLink to="/">Write New</NavLink>
      <NavLink to="/">Your Activity</NavLink>
      
      <Outlet />
    </div>
  );
}

export default App;
