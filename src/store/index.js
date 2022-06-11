import Vue from 'vue'
import Vuex from 'vuex'
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut } from "firebase/auth"
import { addDoc,collection } from "firebase/firestore";
import {db} from "@/main"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser:null,
    comments:[],
  },

  mutations: {
    setLoginUser(state,user){
      state.loginUser = user;
    },
    setLogoutUser(state){
      state.loginUser = null;
    },
    keepLoginUser(state,user){
      state.loginUser = user;
    },
    addComment(state,comment){
      state.comments.push(comment)
    }
  },
  actions: {
    login({commit}){
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result)
          const user = result.user;

        if (user) {
          console.log(user);
          commit('setLoginUser',user);

        } else {
          alert('有効なアカウントではありません')
        }
          // This gives you a Google Access Token. You can use it to access the Google API.
          // The signed-in user info.
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "@@@" + errorMessage);
          // ...
        });
    },
    logout({commit}){
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log("サインアウトしました")
        commit("setLogoutUser")
      }).catch((error) => {
        const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "@@@" + errorMessage);
      })
    },
    onAuth({ commit }) {
      getAuth().onAuthStateChanged(user => {
        if(!user) user = null;
        console.log(user);
        commit('keepLoginUser', user)
      })
    },
    addComment({commit ,getters},comment){
      console.log(getters.uid);
      console.log(comment);
      if(getters.uid){
        try{

        const docRef =  addDoc(collection(db, `users/${getters.uid}/comments`),{
          comment
        });

        console.log("Document written with ID: ", docRef);

        }
        catch(error){

          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "@@@" + errorMessage);
        }

      }

      commit("addComment",comment)
    }

  },
  getters:{
    userName : state => state.loginUser ? state.loginUser.displayName : "",
    uid : state => state.loginUser ? state.loginUser.uid : null
  },
  modules: {
  }
})
