import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserHome from './components/UserHome';
import AddActivity from './components/AddActivity';
import AllActivities from './components/AllActivities';
import ActivitiesDateWise from './components/ActivitiesDateWise';
import Dashboard from './components/Dashboard';
import GetSuggestions from './components/GetSuggestions';
import Navbar from './components/Navbar';
import GreetPage from './components/GreetPage';
import { AuthProvider } from './context/AuthContext';
import  Leaderboard  from './components/Leaderboard';
function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<GreetPage />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/userHome" element={<UserHome />} />
            <Route exact path="/addActivity" element={<AddActivity />} />
            <Route exact path="/getActivity" element={<AllActivities />} />
            <Route exact path="/getActivityByDate" element={<ActivitiesDateWise />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/suggestion" element={<GetSuggestions />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
