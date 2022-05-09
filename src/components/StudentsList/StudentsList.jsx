import React from 'react'
import "./StudentsList.css"
import { GET_ALL_STUDENTS } from '../../graphql/Query'
import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as FaIcons from "react-icons/fa";
import { useQuery } from '@apollo/client';
import Loading from '../Loading/Loading';


const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Nome', width: 200 },
    { field: 'cpf', headerName: 'CPF', width: 200 },
    { field: 'email', headerName: 'E-mail', width: 300 }
];

function StudentsList() {
    const { data, loading } = useQuery(GET_ALL_STUDENTS)
    if (loading) return <Loading />;

    const rows = data.getStudents;

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

export default StudentsList;