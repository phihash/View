<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import {mapActions} from "vuex"

export default{
  created() {
    this.onAuth()
  },
  methods:{
    ...mapActions(["onAuth"])
  },
}
</script>
