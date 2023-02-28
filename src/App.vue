<script >
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/feed">Feed</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/sign-in">Login</RouterLink>
        <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import router from './router';
  import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

  const isLoggedIn = ref(false);

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user){
        isLoggedIn.value = true;
      }else{
        isLoggedIn.value = false;
      }
    })
  })

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      router.push('/');
    })
  };

</script>

