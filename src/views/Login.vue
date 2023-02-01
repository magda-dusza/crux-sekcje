<template>
  <h1>Login to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="signIn">Submit</button></p>
</template>
<script>
  import { useRouter } from 'vue-router';
  import { useUserStore } from "../store/user";

  export default {
    setup() {
      const router = useRouter();
      const userStore = useUserStore();
      return { userStore, router };
    },
    data(){
      return {
        email: '',
        pasword: '',
        errMsg: ''
      }
    },
    methods:{
      async signIn(){
          const { error, data } = await this.userStore.signIn(this.email, this.password)
          if(error){
            this.errMsg = error
          } else {
            this.router.push('/panel') 
          }
      } 
    }
  }
</script>