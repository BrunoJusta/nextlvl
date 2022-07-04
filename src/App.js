import "./App.css";
import { Route, Routes, HomeLayoutRoute } from "react-router-dom";
import {
  Home,
  Profile,
  GameProfile,
  Releases,
  Wishlist,
  GameCollection,
} from "./pages";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="app p-0 m-0">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/:userId" element={<Profile />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/collection" element={<GameCollection />} />
        <Route path="/game/:gameId" element={<GameProfile />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
