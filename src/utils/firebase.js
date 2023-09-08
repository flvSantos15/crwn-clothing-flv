import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAxlYS1gg_fdzjtGDMaK_INnrdJ7lK8Oa4',
  authDomain: 'crwn-db-de84d.firebaseapp.com',
  projectId: 'crwn-db-de84d',
  storageBucket: 'crwn-db-de84d.appspot.com',
  messagingSenderId: '274280195069',
  appId: '1:274280195069:web:fa50a2c857eb501b9faf94'
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
