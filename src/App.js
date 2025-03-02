import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Courses from './pages/Courses';
import Course from './pages/Course';
import EventsList from './pages/EventsList';
import EventsGrid from './pages/EventsGrid';
import Event from './pages/Event';
import About from './pages/About';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import Contacts from './pages/Contacts';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/events-list" element={<EventsList />} />
        <Route path="/events-grid" element={<EventsGrid />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
