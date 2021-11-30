import gql from 'graphql-tag';

export default gql`
  fragment VariableSelections on Quote {
    deductible
    asteroid_collision
  }
`;
