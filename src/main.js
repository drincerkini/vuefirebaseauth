import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTHSruOSfm2R0z4GHMh0XdhJ1JEMPBDyk",
  authDomain: "vuevuexfirebaseauth.firebaseapp.com",
  projectId: "vuevuexfirebaseauth",
  storageBucket: "vuevuexfirebaseauth.appspot.com",
  messagingSenderId: "458798238257",
  appId: "1:458798238257:web:c63c446bf8da1b4d8ee310"
};

initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)


app.mount('#app')
