<template>
  <main class=search>
    <!-- Search Bar Implementation-->
    <input type="text" v-model="search" placeholder="Search Classes...">

    <!-- Individual Buttons for Classes Produced by Search, with data from classes object -->
    <button class="item classes buttons" v-for="(classInfo, index) in classes" :key="classInfo.id" @click="toggleModal(index) && openModal(index)">
      <p>{{ classInfo.name }}</p>
    </button>

    <!--Modal for each button -->
    <div class="modal" v-for="(classInfo, index) in classes" :key="classInfo.id" v-if="showModal[index]">

      <!-- Close Button for Modal -->
      <span class="close" @click="toggleModal(index) && openModal(index)">&times;</span>

      <!-- Header for Modal -->
      <header class="modal-header"> {{ classInfo.name }} </header>

      <!-- Content for each Modal provided by classes Object-->
      <div class="item modal-content" id="modal-content">
        <p><strong>Location:</strong> {{ classInfo.location }}</p>
        <p><strong>Time:</strong> {{ classInfo.time }}</p>
        <p><strong>Professor:</strong> {{ classInfo.professor }}</p>
      </div>
    </div>

    <!-- Failed Search Implementation -->
    <div class="item error" v-if="input && !filterclasses().length">
      <p>No results found!</p>
    </div>

  </main>
</template> 

<script setup>

import { ref } from "vue";

// Search Bar basic functionality
let input = ref("");

function filterclasses() {
  return classes.name.filter((classInfo) =>
  classInfo.name.toLowerCase().includes(input.value.toLowerCase())
  );
}

const classes = [
  { id: 1, name: 'CSE2050', location: 'ITE 138', time: 'Tu 10:00 AM - 11:50 AM', professor: 'Prof. Scoggin' },
  { id: 2, name: 'MATH 2110', location: 'AUST 108', time: 'MoWeFr 10:10 AM -11:00 AM', professor: 'Prof. Hall' },
  { id: 3, name: 'CHEM 2241', location: 'MCHU 102', time: 'TuTh 8:00am-9:15am', professor: 'Prof. Anwar' },
  { id: 4, name: 'ME 2233', location: 'BOUS A106', time: 'TuTh 12:30 PM -1:45 PM', professor: 'Prof. Francesco' },
  { id: 5, name: 'CSE2500', location: 'MCHU 101', time: 'TuTh 10:00 PM - 11:50 PM', professor: 'Prof. Mahmood' },
  { id: 6, name: 'CSE1007', location: 'MCHU 101', time: 'TuTh 10:00 PM - 11:50 PM', professor: 'Prof. Dawson' },        
]
 
let showModal = ref(Array(classes.length).fill(false));

function toggleModal(index) {
  showModal.value[index] = !showModal.value[index];
}

function openModal(index) {
  if (showModal.value[index] == true) {
    showModal.value[index].style.display = "block"
  }
  else {
    showModal.value[index].style.display = "none"
  }  
}





</script>

<style>

/* Search Bar Styling */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: flex;
  width: 840px; 
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("src/assets/search-bar-icon.png") no-repeat 0px center;
  background-size: 50px 50px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 750px ;
  display: center; 
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.classes {
  background-color: #000E2F;
  cursor: pointer;
  color:white;
}

.error {
  background-color: tomato;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-header {
  background-color: #000E2F;
  cursor: pointer;
  color:white;
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

</style>