import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Team from './routes/Team';
import Member from './routes/Member';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import Filler from './routes/Filler';


import './App.css';

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async function() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const dataJson = await response.json();
        setMembers(dataJson);
      } catch(error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Filler />} />
          <Route path="about" element={<About />} /> 
          <Route path="team" element={<Team members={members} />} >
            <Route index element={
                <main style={{ padding: "1rem" }}>
                  <h2>Insert team picture here</h2>
                </main>
            } />
            <Route path=":memberId" element={<Member members={members} setMembers={setMembers} />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* no match route */}
      </Routes>
    </div>
  );
}

export default App;
