<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>



  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions} from "vuex"


export default {
  name: 'HomeView',
  created() {
    this.onAuth()
  },
  components: {
    HelloWorld
  },
  methods:{
    ...mapActions(["onAuth"])
  },
}
</script>
