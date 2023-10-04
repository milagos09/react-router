import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Admin from "./Admin";
import Public from "./Public";
import Dashboard from "./Dashboard";
import Logs from "./Logs";
import Setting from "./Setting";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Public />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="admin" element={<Admin />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="logs" element={<Logs />} />
                    <Route path="setting" element={<Setting />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
