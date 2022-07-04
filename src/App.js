import "./App.css";
import { Route, Routes, HomeLayoutRoute } from "react-router-dom";
import { Home, Profile } from "./pages";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="app p-0 m-0">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/:userId" element={<Profile />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
