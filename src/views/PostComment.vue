<template>
  <div class="comment">
    <h4>コメントしてください</h4>
      <input v-model="comment"  type="text" name="" id="">
      <button @click="submit">送信</button>
  {{comment}}
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from "vuex"

export default {
  data(){
    return{
       comment:""
    }
  },
  created() {
    console.log("なにわ")
    this.onAuth()
  },
  methods:{
    submit(){
      this.addComment(this.comment)
      this.$router.push({name:"about"})
    },
    ...mapActions(["onAuth","addComment"])
  },

}
</script>
