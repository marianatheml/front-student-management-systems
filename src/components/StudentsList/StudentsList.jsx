import * as React from 'react';
import "./StudentsList.css"
import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as FaIcons from "react-icons/fa";


const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Nome', width: 200 },
    { field: 'cpf', headerName: 'CPF', width: 200 },
    { field: 'email', headerName: 'E-mail', width: 300 }
];

const rows = [
    { id: 1, name: 'Snow', cpf: '00000000000', email: 'Snow@rmail.com' },
    { id: 2, name: 'Lannister', cpf: '00000000000', email: 'Lannister@rmail.com' },
    { id: 3, name: 'Lannister', cpf: '00000000000', email: 'Lannister@rmail.com' },
    { id: 4, name: 'Stark', cpf: '00000000000', email: 'Stark@rmail.com' },
    { id: 5, name: 'Targaryen', cpf: '00000000000', email: 'Targaryen@rmail.com' },
    { id: 6, name: 'Melisandre', cpf: '00000000000', email: 'Melisandre@rmail.com' },
    { id: 7, name: 'Clifford', cpf: '00000000000', email: 'Clifford@rmail.com' },
    { id: 8, name: 'Frances', cpf: '00000000000', email: 'Frances@rmail.com' },
    { id: 9, name: 'Roxie', cpf: '00000000000', email: 'Roxie@rmail.com' },
];

export default function DataTable() {
    return (
        <div>
            <div className='students_table_header'>
                <div className='students_table_title'>
                    <h5>Lista de Estudantes</h5>
                </div>
                <div className='students_table_search'>
                    <TextField id="standard-basic" label="Buscar" variant="standard" />
                    <a href='/'><FaIcons.FaSearch /></a>
                </div>
            </div>
            <div className='students_table'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                />
            </div>
        </div>
    );
}
