import {gql} from '@apollo/client';

export const EDIT_USER = gql`
    mutation editUser(
        $id: Int!, 
        $firstName: String!,
        $secondName: String!,
        $email: String!,
        $password: String) {
                    editUser(
                        id: $id,
                        firstName: $firstName,
                        secondName: $secondName,
                        email: $email
                        password: $password
                    ) {
                    firstName
                    secondName
                    email
                    }
              }
        
`;

