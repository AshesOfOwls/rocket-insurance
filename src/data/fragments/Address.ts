import gql from 'graphql-tag';

export default gql`
  fragment Address on any { 
    line_1
    line_2
    city
    region
    postal
  }
`;
