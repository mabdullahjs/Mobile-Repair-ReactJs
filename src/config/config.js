import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDLGNP1XOYgoFznVvSJbISDuKtcKmw1t7w",
    authDomain: "tkh-123.firebaseapp.com",
    projectId: "tkh-123",
    storageBucket: "tkh-123.appspot.com",
    messagingSenderId: "913441950184",
    appId: "1:913441950184:web:8a3e63de38bddb57d0bc5d",
    measurementId: "G-Q31BZVSHV8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);