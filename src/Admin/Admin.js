import './Admin.css';
import { useNavigate } from "react-router-dom";

const Admin = () => {
    let name = localStorage.getItem("Name");
    const nav = useNavigate();
    return (
        <>
        <div className="admin">
            <button onClick={() => nav("/admin/addcatagories")}>Add Properties</button>
            <button onClick={() => nav("/admin/pendings")}>Approve Bookings</button>
            </div>
        </>
    )
}

export default Admin;