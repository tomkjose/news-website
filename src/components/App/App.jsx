import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Favourite, Fof, Post } from "../../pages/Index";
import { useEffect } from "react";
import { fetchData } from "../../apis";
import Navbar from "../Navbar/Navbar";

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/favourites" element={<Favourite />}></Route>
          <Route exact path="/post/:id" element={<Post />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
