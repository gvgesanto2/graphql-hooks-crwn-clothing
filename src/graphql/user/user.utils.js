import { createUserProfileDocument } from '../../firebase/firebase.utils';

import { GET_CURRENT_USER } from './user.queries';

export const setCurrentUser = (cache, currentUser) => {
  cache.writeQuery({
    query: GET_CURRENT_USER,
    data: { currentUser }
  });
}

export const getSnapshotFromUserAuth = async (userAuth, additionalData) => {
  try {
    const userRef = await createUserProfileDocument(userAuth, additionalData);
    
    const userSnapshot = await userRef.get();
    return {
      id: userSnapshot.id,
      ...userSnapshot.data()
    };
  } catch(error) {
    console.log(error);
    return null;
  }
}

export const updateCurrentUser = async (cache, userAuth, additionalData) => {
  const currentUser = await getSnapshotFromUserAuth(userAuth, additionalData);

  setCurrentUser(cache, currentUser);

  return currentUser;
}