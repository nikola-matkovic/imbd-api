import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Movies from "../Movies";

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:movie" element={<Movies />} />
            <Route path="/*" element={<p>404</p>} />
        </Routes>
    );
};

export default RouterPage;
