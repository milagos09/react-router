import { Link } from "react-router-dom";

function AdminNavbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/admin"}>Dashboard</Link>
                </li>
                <li>
                    <Link to={"/admin/logs"}>Logs</Link>
                </li>
                <li>
                    <Link to={"/admin/setting"}>Setting</Link>
                </li>
            </ul>
        </nav>
    );
}

export default AdminNavbar;
