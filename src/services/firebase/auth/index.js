import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase'

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creting the user', error.message)
    }
  }

  return userDocRef
}
