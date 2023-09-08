import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase'

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  console.log(userSnapshot.exists())
}
