import cartResolvers from './cart/cart.resolvers';
import directoryResolvers from './directory/directory.resolvers';
import userResolvers from './user/user.resolvers';

const rootResolver = [
  cartResolvers,
  directoryResolvers,
  userResolvers
];

export default rootResolver;