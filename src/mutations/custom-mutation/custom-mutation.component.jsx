import React from 'react';
import { Mutation } from 'react-apollo';

const CustomMutation = ({ children, mutation }) => {
  return (
    <Mutation mutation={mutation}>
      {
        mutationFunction => {
          if(typeof children === "function") {
            return children(mutationFunction);
          }

          return React.Children.map(children, child =>
            React.cloneElement(child, { mutationFunction })
          );
        }
      }
    </Mutation>
  );
}

export default CustomMutation;