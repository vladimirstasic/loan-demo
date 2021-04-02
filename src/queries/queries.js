import {gql} from '@apollo/client';

export const GET_POST = gql`
    query post($id: ID!){
        post(id: $id) {
            id
            title
            body
        }
    }
`;
export const GET_ALL_POSTS = gql`
    query allPosts(
        $options: PageQueryOptions
    ) {
        posts(options: $options) {
            data {
                id
                title
            }
            meta {
                totalCount
            }
        }
    }
`;