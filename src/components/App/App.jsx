import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Favourite, Fof, Post } from "../../pages/Index";
import { useEffect } from "react";
import { fetchData } from "../../apis";

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/favourite" element={<Favourite />}></Route>
          <Route exact path="/post/:id" element={<Post />}></Route>
          <Route path="*" element={<Fof />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
