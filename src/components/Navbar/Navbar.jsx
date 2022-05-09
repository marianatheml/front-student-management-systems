import React, { useState } from "react";
import './Navbar.css'
import { CREATE_STUDENT } from "../../graphql/Mutation"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as FaIcons from "react-icons/fa";
import { TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import Loading from "../Loading/Loading";

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");

    const [createStudent, { error }, loading] = useMutation(CREATE_STUDENT);
    if (loading) return <Loading />;

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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="register_title">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Cadastrar
                        </Typography>
                        <Typography id="modal-modal-description">
                            Preencha todos os campos para adicionar um novo aluno ao sistema.
                        </Typography>
                    </div>
                    <div className="register_fields">
                        <TextField label="Nome" variant="standard" onChange={(event) => {
                            setName(event.target.value);
                        }} />
                        <TextField label="E-mail" variant="standard" onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                        <TextField label="CPF" variant="standard" onChange={(event) => {
                            setCpf(event.target.value);
                        }} />
                    </div>
                    <div className="register_button">
                        <button onClick={() => {
                            createStudent({
                                variables: {
                                    name: name,
                                    cpf: cpf,
                                    email: email,
                                },
                            }).then(window.location.reload());
                        }}>Cadastrar</button>
                    </div>
                </Box>
            </Modal>
        </nav>
    );
}

export default Navbar;