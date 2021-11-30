import gql from 'graphql-tag';

// TODO: :( maybe this?
// https://github.com/apollographql/eslint-plugin-graphql/issues/19
import Address from 'data/fragments/Address'; // eslint-disable-line
import PolicyHolder from 'data/fragments/PolicyHolder'; // eslint-disable-line
import VariableOptions from 'data/fragments/VariableOptions'; // eslint-disable-line
import VariableSelections from 'data/fragments/VariableSelections'; // eslint-disable-line

export default gql`
  fragment QuoteFull on Quote {
    quoteId
    rating_address: Address
    policy_holder: PolicyHolder
    variable_options: VariableOptions
    variable_selections: variable_selections
    premium
  }
`;
