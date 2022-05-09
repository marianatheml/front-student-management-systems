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

export const GET_STUDENT_BY_NAME = gql`
    query getStudentByName {
        getStudentByName {
            name
        }
    }
`
export const GET_STUDENT_BY_EMAIL = gql`
    query getStudentByEmail {
        getStudentByEmail {
            email
        }
    }
`
export const GET_STUDENT_BY_CPF = gql`
    query getStudentByCpf {
        getStudentByCpf {
            cpf
        }
    }
`