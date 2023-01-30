<template>
  <div>
    <button @click="firebaseSignOut">Logout</button>
  </div>
  <h1>Panel</h1>
  <h3>This page is for users only</h3>
</template>

<script setup>
  import { getAuth, signOut } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  // runs after firebase is initialized
  const auth = getAuth();
  const firebaseSignOut = () => {
    signOut(auth)
    router.push('/')
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
