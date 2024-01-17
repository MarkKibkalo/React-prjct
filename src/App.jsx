import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./pages/Homepage";
import { Voting } from './pages/Votingpage';
import { Breeds } from './pages/Breedspage';
import { Gallery } from './pages/Gallerypage';
import { Search } from "./pages/Searchpage";
import {Likes} from "./pages/Likespage";
import { UploadImg } from "./pages/Uploadpage";

import { Layout } from "./components/Layout";
import { Fav } from "./pages/Favpage";
import { Dislikes } from "./pages/Dislikespage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='voting' element={<Voting />} />
          <Route path='breeds' element={<Breeds />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='search' element={<Search />} />
          <Route path='likes' element={<Likes />} />
          <Route path='favorites' element={<Fav />} />
          <Route path='dislikes' element={<Dislikes />} />
          <Route path='upload' element={<UploadImg />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
