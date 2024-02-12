import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Home/Home';

export const Body = () => {
     return (
         <Router>
            <Routes>
                <Route path={'*'} element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
            </Routes>
         </Router>
     );
};
