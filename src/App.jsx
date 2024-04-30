import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import RegisterUsers from "./components/RegisterUsers";
import ChooseGenre from "./components/ChooseGenre";
import BrowseMovies from "./components/BrowseMovies";
import NotFound from "./components/PageNotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<RegisterUsers />} />
                <Route path='movies/genre' element={<ChooseGenre />} />
                <Route path='movies/browse' element={<BrowseMovies />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
