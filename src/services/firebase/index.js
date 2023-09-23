import { collection, writeBatch } from 'firebase/firestore'
import { db } from '../../utils/firebase'

export const addCollectionAdnDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey)
}
