import React, { useState } from "react";
import './Navbar.css'
import RegisterStudentModal from '../RegisterStudentModal/RegisterStudentModal';
import * as FaIcons from "react-icons/fa";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '25px',
    boxShadow: 24,
    p: 5,
};

function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <li className="nav_item_add">
                    <button onClick={handleOpen}>
                        +
                    </button>
                </li>
            </ul>
            <div onClick={navToggle} className="nav_toggler">
                <FaIcons.FaBars />
            </div>
            <RegisterStudentModal style={style} open={open} handleClose={handleClose}/>
        </nav>
    );
}

export default Navbar;