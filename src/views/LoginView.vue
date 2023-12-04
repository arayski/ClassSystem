<template>
    <div class="login-page">
        <div class="login-container">
            <form name="login-form" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="username">NetID: </label>
                    <input id="username" type="text" v-model="username" />
                </div>
                <div class="mb-3">
                    <label for="password">Password: </label>
                    <input id="password" type="password" v-model="password" />
                </div>
                <button class="btn btn-outline-dark" type="submit">
                    Login
                </button>
                <!-- Display error message -->
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template>



<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref(''); // For displaying error messages

async function handleSubmit() {
    errorMessage.value = ''; // Reset the error message on new submission
    const api = import.meta.env.VITE_LOGIN;
    try {
        const response = await fetch(`${api}?netid=${username.value}&password=${password.value}`, {
            method: 'POST',
            
        });

        if (response.ok) {
            //store netid to get items in db
            //Save data to sessionStorage
            sessionStorage.setItem('username', username.value);

            // Get saved data from sessionStorage
            //let data = sessionStorage.getItem("key");

            // Remove saved data from sessionStorage
            //sessionStorage.removeItem("key");

            // Remove all saved data from sessionStorage
            //sessionStorage.clear();

            //localStorage.setItem('username', username.value);
            

            router.push('/home');  
        } else {
            const errorData = await response.json();
            if (response.status === 401) {
                errorMessage.value = 'Incorrect password.';
            } else if (response.status === 404) {
                errorMessage.value = 'Incorrect Username.';
            } else {
                errorMessage.value = 'Unknown error. Please try again later.';
            }
        }
    } catch (error) {
        errorMessage.value = 'API Error.';
    }
    
}
</script>




<style scoped>
    .login-page {
        height: 100vh; 
        background-image: url('../assets/loginbackdrop.jpeg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative; /* Added position property */
    }

    /* Add a semi-transparent overlay with a blue tint */
    .login-page::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00002F;
        opacity: 0.75; /* Adjust the opacity as needed */
    }

    .login-container {
        background-color: #F2F2F2;  /* Set the background color to white with no opacity */
        padding: 50px;
        border-radius: 5px; 
        max-width: 400px; 
        margin: 0 auto; 
        position: absolute; /* Added position property */
        top: 50%; /* Center the login container vertically */
        left: 50%; /* Center the login container horizontally */
        transform: translate(-50%, -50%); /* Center the login container */
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
        margin-top: 10px; /* Added margin for spacing */
    }

    .login-container button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        font-size: 30px;
        margin-top: 20px;
        border-radius: 5px;
        padding: 10px;
        background-color: #000E2F;
        color: white;
    }

    .error-message {
        color: red;
    }
</style>

