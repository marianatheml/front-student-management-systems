import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createStudent($name: String!, $cpf: String!, $email: String!) {
    createUser(name: $name, cpf: $cpf, email: $email) {
        id
        name
        cpf
        email
        }
    }
`;