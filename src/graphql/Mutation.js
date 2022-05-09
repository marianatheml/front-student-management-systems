import { gql } from "@apollo/client";

export const CREATE_STUDENT = gql`
    mutation createStudent($name: String!, $cpf: String!, $email: String!) {
        createStudent(name: $name, cpf: $cpf, email: $email) {
        id
        name
        cpf
        email
        }
    }
`;