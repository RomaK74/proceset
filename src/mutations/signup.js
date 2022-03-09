import {gql} from '@apollo/client';

export const SIGNUP = gql`
    mutation signup(
        $firstName: String! 
        $secondName: String! 
        $email: String! 
        $password: String!) {
             signup(
                firstName: $firstName, 
                secondName: $secondName,
                email: $email
                password: $password)   
        }    
 `;
