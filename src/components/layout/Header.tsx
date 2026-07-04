import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="flex items-center gap-20">
            <h2>Header</h2>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link
                            to="/"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-blue-500 hover:text-blue-600"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
