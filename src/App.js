import './App.css';
import Home from './components/home';
import {Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import ContactMe from './components/contact';
import Projects from './components/projects';

function App() {
  return (
 <>
 <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<ContactMe/>}/>
      <Route path="projects" element={<Projects/>}/>
    </Route>
 </Routes>
 </>
  );
}

export default App;
