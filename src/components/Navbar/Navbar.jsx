import React, { useState } from "react";
import './Navbar.css'
import * as FaIcons from "react-icons/fa";

function Navbar() {
    const [active, setActive] = useState("nav_menu");

    const navToggle = () => {
        if (active === "nav_menu") {
            setActive("nav_menu nav_active");
        } else setActive("nav_menu");
    };

    return (
        <nav className="nav">
            <a href="/" className="nav_logo">
                Gerenciamento de Estudantes
            </a>
            <ul className={active}>
                <li className="nav_item">
                    <a href="/">
                        Início
                    </a>
                </li>
                <li className="nav_item">
                    <a href="/">
                        Contato
                    </a>
                </li>
                <li className="nav_item_add">
                    <a href="/">
                        Novo aluno
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className="nav_toggler">
                <FaIcons.FaBars />
            </div>
        </nav>
    );
}

export default Navbar;