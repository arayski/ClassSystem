<template>
  <header class="app-header">
    <div>
      <nav class="nav">

            <RouterLink to="/home" v-if="userRole === 'student'">Home</RouterLink>
            <RouterLink to="/classes" v-if="userRole === 'student'">Enrolled Classes</RouterLink>
            <RouterLink to="/search" v-if="userRole === 'student'">Select Classes</RouterLink>
            <RouterLink to="/Schedule" v-if="userRole === 'student'">Schedule</RouterLink>
            <RouterLink to="/Profile" v-if="userRole === 'student'">Profile</RouterLink>

            <!-- Admin Links -->
            <RouterLink to="/create" v-if="userRole === 'admin'">Add Classes</RouterLink>
            <RouterLink to="/delete" v-if="userRole === 'admin'">Delete Classes</RouterLink>



            <!--
              This RouterLink does not point to a specific path, but rather the name of a route.
              Check out router/index.js for how this is defined
            -->
            <!--<RouterLink :to="{ name: 'form' }">Form Example</RouterLink>-->
            <button @click="handleLogout" class="logout-button">Logout</button>
            
            
      </nav>
    </div>
  </header>
</template>

<script setup>

import { RouterLink } from "vue-router";
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();

const userRole = ref(null); 

onMounted(async () => {
  try {
    const role = await getRole();
    userRole.value = role; 
  } catch (error) {
    console.error(error);
   
  }
});



// give this component a title property so that the parent component (app.vue) can set whatever title it wants
defineProps({
  title: {
    type: String,
    required: true,
  },
});


function handleLogout() {
  sessionStorage.clear(); 

  router.push('/');
}


function getRole() {
  const netid = sessionStorage.getItem('username');
  if (!netid) {
    return Promise.reject('No user logged in');
  }
  const api = import.meta.env.VITE_API
  
  return fetch(`${api}/prod/${netid}`)
    .then(response => response.json())
    .then(data => data.Item.role) 
    .catch(error => {
      console.error('Error fetching data:', error);
      return null; 
    });
}


</script>

<style>
/* give the header itself a background color, a border, and add some padding to the content */
.app-header {
  display: flex;
  justify-content: left;
  background-color:#000E2F;
  border-bottom: 1px solid gray;
  padding: 1rem;
}

.nav a {
  color:white;
  padding: 16px;
  text-decoration: none;
  font-size: 17px;
  margin-right: 5px;
}

.nav a:hover {
  background-color:#ddd;
  color:#000E2F; 
}

.logout-button {
  color:white;
  padding: 16px;
  text-decoration: none;
  font-size: 17px;
  margin-right: 5px;
  background-color: #000E2F;
}

.logout-button a:hover{
  background-color:#ddd;
  color:#000E2F; 
}


.app-header h1 {
  font-size: 2rem;
  font-weight: bold;
  color:white;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  /*padding: 20px;
  min-height: 100vh;8*/
  background-color: rgb(234, 242, 255);
}

</style>
