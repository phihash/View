<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/post-comment">PostComment</router-link> |
    </nav>
      <button @click="$router.push({name:'post-comment'})">コメント投稿</button>
      <button @click="login" v-if="!$store.state.loginUser">ログイン</button>
      <button @click="logout" v-else>ログアウト</button>
      <p v-if="$store.state.loginUser">こんにちは{{userName}}さん</p>
    <p v-else>こんにちはゲストユーザーさん</p>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { mapActions , mapGetters } from 'vuex'
export default {
  methods: {

    ...mapActions(['login','logout'])
  },
  computed: {
    ...mapGetters(['userName', 'photoURL'])
  }
}
</script>
