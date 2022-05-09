import { gql } from "@apollo/client";

export const GET_ALL_STUDENTS = gql`
    query getStudents {
        getStudents {
            id
            name
            cpf
            email
        }
    }
`