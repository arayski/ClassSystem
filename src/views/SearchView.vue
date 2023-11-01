<template>
  <main class=search>
    <input type="text" v-model="search" placeholder="Search Classes...">
    <button class="item classes" v-for="classInfo in classes" :key="O_class">
      <p>{{ classInfo.name }}</p>

      <div id="c_Modal" class="modal">
        <header class="item classes"> {{ classInfo.name }}</header>
        <div class="item classes">
          <p><strong>Location:</strong> {{ classInfo.location }}</p>
          <p><strong>Time:</strong> {{ classInfo.time }}</p>
          <p><strong>Professor:</strong> {{ classInfo.professor }}</p>
        </div>
      </div>
    </button>
    <div class="item error" v-if="input&&!filterclasses().length">
      <p>No results found!</p>
    </div>
  </main>
</template> 

<script setup>

import { ref } from "vue";

// Search Bar basic functionality
let input = ref("");

function filterclasses() {
  return classes.name.filter((classes) =>
  classes.name.toLowerCase().includes(input.value.toLowerCase())
  );
} 

    data() ;{
      return {
        classes: [
          { id: 1, name: 'CSE2050', location: 'ITE 138', time: 'Tu 10:00 AM - 11:50 AM', professor: 'Prof. Scoggin' },
          { id: 2, name: 'MATH 2110', location: 'AUST 108', time: 'MoWeFr 10:10 AM -11:00 AM', professor: 'Prof. Hall' },
          { id: 3, name: 'CHEM 2241', location: 'MCHU', time: 'TuTh 8:00am-9:15am', professor: 'Prof. Anwar' },
          { id: 4, name: 'ME 2233', location: 'BOUS A106', time: 'TuTh 12:30 PM -1:45 PM', professor: 'Prof. Francesco' },
          { id: 5, name: 'CSE2500', location: 'MCHU 101', time: 'TuTh 10:00 PM - 11:50 PM', professor: 'Prof. Mahmood' },
          { id: 6, name: 'CSE1007', location: 'MCHU 101', time: 'TuTh 10:00 PM - 11:50 PM', professor: 'Prof. Dawson' },
          
          
        ]
      };
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
  display: block;
  width: 1040px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("assets/search-bar-icon.png") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 790px ;
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

</style>