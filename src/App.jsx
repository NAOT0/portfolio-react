import "./App.css";
import BlogPage from "./components/BlogPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NotfoundPage from "./components/NotfoundPage";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "//"}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
