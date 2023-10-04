import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function Admin() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    );
}

export default Admin;
