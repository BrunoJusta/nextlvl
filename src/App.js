import "./App.css";
import { Route, Routes, HomeLayoutRoute } from "react-router-dom";
import {
  Home,
  Profile,
  GameProfile,
  Releases,
  Wishlist,
  GameCollection,
  GameSearch,
  Favorites,
} from "./pages";
import { Nav } from "./components/Nav";
import { AddFavorites } from "./pages/AddFavorites";
import { Following } from "./pages/Following";

function App() {
  return (
    <div className="app p-0 m-0">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/:userId" element={<Profile />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/collection" element={<GameCollection />} />
        <Route path="/search" element={<GameSearch />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/following" element={<Following />} />
        <Route path="/addfavorites" element={<AddFavorites />} />
        <Route path="/game/:gameId" element={<GameProfile />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
