import React from 'react'
import "./StudentsList.css"
import { GET_ALL_STUDENTS } from '../../graphql/Query'
import {
    DataGrid,
    ptBR,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport
} from '@mui/x-data-grid';
import { useQuery } from '@apollo/client';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';


const CustomToolbar = () => {
    return (
        <GridToolbarContainer className="grid-toolbar">
            <div>
                <GridToolbarColumnsButton sx={{ color: "#2e7d32" }} />
                <GridToolbarFilterButton sx={{ color: "#2e7d32" }} />
            </div>
            <div>
                <GridToolbarExport sx={{ color: "#2e7d32" }} />
            </div>
        </GridToolbarContainer>
    );
}

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Nome', width: 200 },
    { field: 'cpf', headerName: 'CPF', width: 200 },
    { field: 'email', headerName: 'E-mail', width: 300 }
];

function StudentsList() {
    const { data, error, loading } = useQuery(GET_ALL_STUDENTS)
    if (loading) return <Loading />;
    if (error) return <Error />;

    const rows = data.getStudents;

    return (

        <div className='students_table'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                components={{ Toolbar: CustomToolbar }}
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} />
        </div>

    );
}

export default StudentsList;