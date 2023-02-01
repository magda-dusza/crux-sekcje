import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { createPinia } from "pinia"

const firebaseConfig = {
  apiKey: "AIzaSyCOEqK9ZZxy4ioqQtSQYe2FX9Fi8hBmCPw",
  authDomain: "crux-sekcje.firebaseapp.com",
  projectId: "crux-sekcje",
  storageBucket: "crux-sekcje.appspot.com",
  messagingSenderId: "33699374962",
  appId: "1:33699374962:web:e0c62e96a747c7a6995feb",
  measurementId: "G-VEY8SCR5EY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
