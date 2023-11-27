<template>
    <div class="login-page">
        <div class="login-container">
            <form name="login-form" @submit.prevent="handleSubmit">
            <div>
                <label for="NetID">NetID: </label>
                <input id="NetID" type="text" v-model="NetID" />
            </div>
            <div>
                <label for="password">Password: </label>
                <input id="password" type="password" v-model="password" />
            </div>
            <button class="btn btn-outline-dark" type="submit">
                Login
            </button>
            </form>
        </div>
    </div>
</template>

<script setup>

//Imports ref so we can check to see if valid netid or pass

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const NetID = ref('');
const password = ref('');

//Allows Login to work if its a useable Netid or Password, placeholder for now is 'admin'

function handleSubmit() {
    // Useable Login Items, Use for now
    const useNetID = 'admin';
    const usePassword = 'admin';
    // Example validation logic
    if (NetID.value === useNetID && password.value === usePassword) {
        router.push('/home');
    } 
    else{
        alert('Invalid NetID or Password.');
    }
}
</script>

<style scoped>
.login-page {
  height: 100vh; /* Cover the full viewport height */
  background-image: url('../assets/loginbackdrop.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.login-container {
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background for the form container */
  padding: 50px;
  border-radius: 5px; /* Optional: rounded corners */
  max-width: 400px; /* Optional: limit the form's width */
  margin: 0 auto; /* Optional: center the form horizontally */
  
}
.login-container label {
    font-size: 30px;
    color: #000E2F;
    
}
.login-container input {
    font-size: 30px;
    border-radius: 10px;
    color: #000E2F;
    width: 100%;
}
.login-container button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
    margin-top: 20px;
    border-radius: 5px;
    padding: 10px;
    background-color:#000E2F;
    color:white;
}
</style>
