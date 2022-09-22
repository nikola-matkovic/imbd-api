import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Show from "../Show";
import Search from "../Search";

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Show/:movie" element={<Show />} />
            <Route path="/search/:exspression" element={<Search />} />
            <Route path="/*" element={<p>404</p>} />
        </Routes>
    );
};

export default RouterPage;
