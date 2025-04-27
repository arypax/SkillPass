import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import EventsGrid from './pages/EventsGrid';
import Event from './pages/Event';
import Contacts from './pages/Contacts';
import AuthModal from './components/AuthModal';
import UnderConstruction from './pages/UnderConstruction';
import SinglePost from './pages/SinglePost';
import './App.css';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar onAuthOpen={() => setAuthOpen(true)} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events-grid" element={<EventsGrid />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/single-post" element={<SinglePost />} />
          </Routes>
        </main>
        <Footer />
        <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
