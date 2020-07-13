import gql from "graphql-tag";

const BLOCK_QUERY = gql`
  query Blocks($id: ID!) {
    block(id: $id) {
      title
      content
    }
  }
`;

export default BLOCK_QUERY;