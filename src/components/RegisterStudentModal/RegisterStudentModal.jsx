import React, { useState } from "react";
import { CREATE_STUDENT } from "../../graphql/Mutation"
import { useMutation } from "@apollo/client";
import Loading from "../Loading/Loading";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";

function RegisterStudentModal({ open, handleClose, style }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [createStudent, { error }, loading] = useMutation(CREATE_STUDENT);
    if (loading) return <Loading />;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="modal_title">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cadastrar
                    </Typography>
                    <Typography id="modal-modal-description">
                        Preencha todos os campos para adicionar um novo aluno ao sistema.
                    </Typography>
                </div>
                <div className="modal_fields">
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
                <div className="modal_button">
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
    );
}

export default RegisterStudentModal;