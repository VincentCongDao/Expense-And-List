import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/expenselist.svg";
import SignOut from "../../page/auth/SignOut";

const Navbar = () => {
    const [userPortal, setUserPortal] = useState<string | null | boolean>(null);
    useEffect(() => {
        const auth = getAuth()
        const userExist = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                setUserPortal(uid)
            }
            else {
                setUserPortal(false)
            }
        })
        return userExist;
    }, []);
    return (
        <>
            <div>
                <nav className="wrapper">
                    <div className="nav-logo brand-logo">
                        <Link to="/">
                            <img src={brandLogo} alt="brand logo" width="25" />
                            <p>Expense List</p>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <ul className="nav-link-body">
                            {userPortal ? (
                                <div className="nav-links-content">
                                    <li className="nav-link"><Link to="/expensetracker">Expense</Link></li>
                                    <li className="nav-link"><Link to="/todolist">To Do List</Link></li>
                                    <SignOut />
                                </div>
                            ) : (
                                <div>
                                    <li className="nav-link"><Link to="/signup">Sign Up</Link></li>
                                </div>
                            )} </ul>
                    </div>
                </nav >
            </div >
        </>);
}

export default Navbar;