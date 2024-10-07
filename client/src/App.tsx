import './App.css'
import { Login } from './pages/Login';
import { Profile } from './pages/Profile'
import { Recommendations } from './pages/Recommendations'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/recommendations/:userId" element={<Recommendations />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
