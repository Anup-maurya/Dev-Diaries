import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./Components/Footer";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Header from "./Components/Header";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />}/>
          <Route path="/edit/:id" element={<EditPost />} />
          
        </Routes>
        <Footer/>
      </Router>
      
    </UserContextProvider>
  );
}

export default App;
