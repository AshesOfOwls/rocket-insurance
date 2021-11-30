
import gql from 'graphql-tag';

export default gql`
  fragment VariableOptions on Quote {
    deductible {
      title
      description
      values
    }
    asteroid_collision {
      title
      description
      values
    }
  }
`;
