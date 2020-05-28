import React from 'react';
import { Query } from 'react-apollo';

import Spinner from '../../components/spinner/spinner.component';

const CustomQuery = ({ children, query, variables }) => {
  return (
    <Query query={query} variables={variables}>
      {
        ({ loading, error, data }) => {
          if(loading) return <Spinner />;
          if(error) return <p>{error.message}</p>;

          if(typeof children === "function") {
            return children(data);
          }
          
          return React.Children.map(children, child =>
            React.cloneElement(child, { data })
          );
        }
      }
    </Query>
  );
}

export default CustomQuery;