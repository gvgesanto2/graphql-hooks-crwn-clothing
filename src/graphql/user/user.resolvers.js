import { 
  auth, 
  googleProvider, 
  getCurrentUser 
} from '../../firebase/firebase.utils';

import { updateCurrentUser } from "./user.utils";


const userResolvers = {
  Mutation: {
    signInWithGoogle: async (_root, _args, { cache }) => {
      try {
        const { user } = await auth.signInWithPopup(googleProvider);
        
        return await updateCurrentUser(cache, user);
      } catch (error) {
        console.log("Error signing in: ", error);
        return null;
      }
    },
    signInWithEmail: async (_root, { email, password }, { cache }) => {
      try {
        const { user } = await auth.signInWithEmailAndPassword(email, password);
        
        return await updateCurrentUser(cache, user);
      } catch (error) {
        console.log("Error signing in: ", error);
        return null;
      }
    },
    signUp: async (_root, { displayName, email, password }, { cache }) => {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        return await updateCurrentUser(cache, user, { displayName });
      } catch (error) {
        console.log("Error signing up: ", error);
        return null;
      }
    },
    checkUserSession: async (_root, _args, { cache }) => {
      try {
        const userAuth = await getCurrentUser();
        if(!userAuth) return null;

        return await updateCurrentUser(userAuth);
      } catch (error) {
        console.log("Error checking user session: ", error);
        return null;
      }
    },
    signOut: async (_root, _args, { cache, client }) => {
      try {
        await auth.signOut();
  
        client.resetStore();

        return true;
      } catch (error) {
        console.log("Error signing out: ", error);
        return false;
      }
    }
  }
}

export default userResolvers;