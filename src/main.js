import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
