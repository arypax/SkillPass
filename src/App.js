import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Course from './pages/Course';
import CourseContent from './pages/CourseContent';
import Test from './pages/Test';
import { auth } from './firebase/config';
import './App.css';

// Защищенный маршрут
const ProtectedRoute = ({ children }) => {
  if (!auth.currentUser) {
    return null;
  }
  return children;
};

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
            <Route path="/course/:id" element={<Course onAuthOpen={() => setAuthOpen(true)} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events-grid" element={<EventsGrid />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/single-post" element={<SinglePost />} />
            <Route path="/course" element={<Course onAuthOpen={() => setAuthOpen(true)} />} />
            <Route
              path="/course-content"
              element={
                <ProtectedRoute>
                  <CourseContent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/test"
              element={
                <ProtectedRoute>
                  <Test />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
