import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Main from './components/Main/Main';

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

import SchoolManagment from './components/SchoolManagment/SchoolManagment';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/school_managment" element={<SchoolManagment />} />
      </Routes>
    </Router>
  );
}

export default App;