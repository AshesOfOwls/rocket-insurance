import gql from 'graphql-tag';

export default gql`
  fragment PolicyHolder on any {
    last_name
    first_name
  }
`;
