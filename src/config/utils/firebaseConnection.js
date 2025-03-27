import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBMe2-fMsWM9eSbrclfbJwTG4c0smCN0Ys",
  authDomain: "airbnb-6cf1c.firebaseapp.com",
  projectId: "airbnb-6cf1c",
  storageBucket: "airbnb-6cf1c.firebasestorage.app",
  messagingSenderId: "1055537770892",
  appId: "1:1055537770892:web:c62e81f784a7f25086e6a9"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };
