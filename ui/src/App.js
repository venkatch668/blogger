import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Signin from './routes/Signin';
import Home from './routes/Home';
import CreateAccount from './routes/CreateAccount';
import About from './routes/About';
import Dashboard from './routes/Dashboard'
import Contact from './routes/Contact';
import Integrations from './routes/Integrations';
import Reports from './routes/Reports';
import CreatePost from './routes/CreatePost';
import Settings from './routes/Settings';
import Comments from './routes/Comments';
import Signout from './routes/Signout';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
     <BrowserRouter>    
      <Routes>
        <Route index element={<Signin />} />
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Home />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="integrations"  element={<Integrations />}></Route>
            <Route path="reports"  element={<Reports />}></Route>
            <Route path="createpost"  element={<CreatePost />}></Route>
            <Route path="settings"  element={<Settings />}></Route>
            <Route path="comments"  element={<Comments />}></Route>
          </Route>
        </Route>
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signout" element={<Signout />} />
        <Route path="*" element={<PageNotFound />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
